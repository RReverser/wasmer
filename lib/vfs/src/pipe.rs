use bytes::{Buf, Bytes};
#[cfg(feature = "futures")]
use futures::Future;
use std::io::IoSlice;
use std::io::{self, Read, Seek, SeekFrom};
use std::ops::DerefMut;
use std::pin::Pin;
use std::sync::Arc;
use std::sync::Mutex;
use std::task::Context;
use std::task::Poll;
use tokio::io::{AsyncRead, AsyncSeek, AsyncWrite};
use tokio::sync::{mpsc, mpsc::error::TryRecvError};

use crate::{ArcFile, FsError, VirtualFile};

#[derive(Debug, Clone)]
pub struct WasiPipe {
    /// Sends bytes down the pipe
    tx: Arc<Mutex<mpsc::UnboundedSender<Vec<u8>>>>,
    /// Receives bytes from the pipe
    /// Also, buffers the last read message from the pipe while its being consumed
    rx: Arc<Mutex<PipeReceiver>>,
    /// Whether the pipe should block or not block to wait for stdin reads
    block: bool,
}

#[derive(Debug)]
struct PipeReceiver {
    chan: mpsc::UnboundedReceiver<Vec<u8>>,
    buffer: Option<Bytes>,
}

impl WasiPipe {
    pub fn channel() -> (WasiPipe, WasiPipe) {
        let pair = WasiBidirectionalPipePair::new();
        (pair.tx, pair.rx)
    }
}

/// Pipe pair of (a, b) WasiPipes that are connected together
#[derive(Clone, Debug)]
pub struct WasiBidirectionalPipePair {
    pub tx: WasiPipe,
    pub rx: WasiPipe,
}

impl VirtualFile for WasiBidirectionalPipePair {
    fn last_accessed(&self) -> u64 {
        self.rx.last_accessed()
    }
    fn last_modified(&self) -> u64 {
        self.rx.last_modified()
    }
    fn created_time(&self) -> u64 {
        self.rx.created_time()
    }
    fn size(&self) -> u64 {
        self.rx.size()
    }
    fn set_len(&mut self, i: u64) -> Result<(), FsError> {
        self.rx.set_len(i)
    }
    fn unlink(&mut self) -> Result<(), FsError> {
        self.rx.unlink()
    }
    fn poll_read_ready(mut self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<io::Result<usize>> {
        let rx = Pin::new(&mut self.rx);
        rx.poll_read_ready(cx)
    }
    fn poll_write_ready(mut self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<io::Result<usize>> {
        let tx = Pin::new(&mut self.tx);
        tx.poll_write_ready(cx)
    }
}

impl AsyncSeek for WasiBidirectionalPipePair {
    fn start_seek(self: Pin<&mut Self>, _position: SeekFrom) -> io::Result<()> {
        Ok(())
    }
    fn poll_complete(self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<io::Result<u64>> {
        Poll::Ready(Ok(0))
    }
}

impl AsyncWrite for WasiBidirectionalPipePair {
    fn poll_write(
        mut self: Pin<&mut Self>,
        cx: &mut Context<'_>,
        buf: &[u8],
    ) -> Poll<io::Result<usize>> {
        let file = Pin::new(&mut self.tx);
        file.poll_write(cx, buf)
    }
    fn poll_flush(mut self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<io::Result<()>> {
        let file = Pin::new(&mut self.tx);
        file.poll_flush(cx)
    }
    fn poll_shutdown(mut self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<io::Result<()>> {
        let file = Pin::new(&mut self.tx);
        file.poll_shutdown(cx)
    }
    fn poll_write_vectored(
        mut self: Pin<&mut Self>,
        cx: &mut Context<'_>,
        bufs: &[IoSlice<'_>],
    ) -> Poll<io::Result<usize>> {
        let file = Pin::new(&mut self.tx);
        file.poll_write_vectored(cx, bufs)
    }
    fn is_write_vectored(&self) -> bool {
        false
    }
}

impl AsyncRead for WasiBidirectionalPipePair {
    fn poll_read(
        mut self: Pin<&mut Self>,
        cx: &mut Context<'_>,
        buf: &mut tokio::io::ReadBuf<'_>,
    ) -> Poll<io::Result<()>> {
        let file = Pin::new(&mut self.rx);
        file.poll_read(cx, buf)
    }
}

impl Default for WasiBidirectionalPipePair {
    fn default() -> Self {
        Self::new()
    }
}

impl WasiBidirectionalPipePair {
    pub fn new() -> WasiBidirectionalPipePair {
        let (tx1, rx1) = mpsc::unbounded_channel();
        let (tx2, rx2) = mpsc::unbounded_channel();

        let pipe1 = WasiPipe {
            tx: Arc::new(Mutex::new(tx1)),
            rx: Arc::new(Mutex::new(PipeReceiver {
                chan: rx2,
                buffer: None,
            })),
            block: true,
        };

        let pipe2 = WasiPipe {
            tx: Arc::new(Mutex::new(tx2)),
            rx: Arc::new(Mutex::new(PipeReceiver {
                chan: rx1,
                buffer: None,
            })),
            block: true,
        };

        WasiBidirectionalPipePair {
            tx: pipe1,
            rx: pipe2,
        }
    }

    #[allow(dead_code)]
    pub fn with_blocking(mut self, block: bool) -> Self {
        self.set_blocking(block);
        self
    }

    /// Whether to block on reads (ususally for waiting for stdin keyboard input). Default: `true`
    #[allow(dead_code)]
    pub fn set_blocking(&mut self, block: bool) {
        self.tx.set_blocking(block);
        self.rx.set_blocking(block);
    }
}

/// Shared version of WasiBidirectionalPipePair for situations where you need
/// to emulate the old behaviour of `Pipe` (both send and recv on one channel).
pub type WasiBidirectionalSharedPipePair = ArcFile<WasiBidirectionalPipePair>;

impl WasiPipe {
    /// Same as `set_blocking`, but as a builder method
    pub fn with_blocking(mut self, block: bool) -> Self {
        self.set_blocking(block);
        self
    }

    /// Whether to block on reads (ususally for waiting for stdin keyboard input). Default: `true`
    pub fn set_blocking(&mut self, block: bool) {
        self.block = block;
    }

    pub fn close(&self) {
        let (mut null_tx, _) = mpsc::unbounded_channel();
        let (_, null_rx) = mpsc::unbounded_channel();
        let mut null_rx = PipeReceiver {
            chan: null_rx,
            buffer: None,
        };
        {
            let mut guard = self.rx.lock().unwrap();
            std::mem::swap(guard.deref_mut(), &mut null_rx);
        }
        {
            let mut guard = self.tx.lock().unwrap();
            std::mem::swap(guard.deref_mut(), &mut null_tx);
        }
    }
}

impl Seek for WasiPipe {
    fn seek(&mut self, _: SeekFrom) -> io::Result<u64> {
        Ok(0)
    }
}

impl Read for WasiPipe {
    fn read(&mut self, buf: &mut [u8]) -> std::io::Result<usize> {
        let max_size = buf.len();

        let mut rx = self.rx.lock().unwrap();
        loop {
            {
                if let Some(read_buffer) = rx.buffer.as_mut() {
                    let buf_len = read_buffer.len();
                    if buf_len > 0 {
                        let mut read = buf_len.min(max_size);
                        let mut inner_buf = &read_buffer[..read];
                        read = Read::read(&mut inner_buf, buf)?;
                        read_buffer.advance(read);
                        return Ok(read);
                    }
                }
            }
            let data = {
                match self.block {
                    true => match rx.chan.blocking_recv() {
                        Some(a) => a,
                        None => {
                            return Ok(0);
                        }
                    },
                    false => match rx.chan.try_recv() {
                        Ok(a) => a,
                        Err(TryRecvError::Empty) => {
                            return Err(Into::<io::Error>::into(io::ErrorKind::WouldBlock));
                        }
                        Err(TryRecvError::Disconnected) => {
                            return Ok(0);
                        }
                    },
                }
            };
            rx.buffer.replace(Bytes::from(data));
        }
    }
}

impl std::io::Write for WasiPipe {
    fn write(&mut self, buf: &[u8]) -> std::io::Result<usize> {
        let tx = self.tx.lock().unwrap();
        tx.send(buf.to_vec())
            .map_err(|_| Into::<std::io::Error>::into(std::io::ErrorKind::BrokenPipe))?;
        Ok(buf.len())
    }

    fn flush(&mut self) -> std::io::Result<()> {
        Ok(())
    }
}

impl AsyncSeek for WasiPipe {
    fn start_seek(self: Pin<&mut Self>, _position: SeekFrom) -> io::Result<()> {
        Ok(())
    }
    fn poll_complete(self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<io::Result<u64>> {
        Poll::Ready(Ok(0))
    }
}

impl AsyncWrite for WasiPipe {
    fn poll_write(
        self: Pin<&mut Self>,
        _cx: &mut Context<'_>,
        buf: &[u8],
    ) -> Poll<io::Result<usize>> {
        let guard = self.tx.lock().unwrap();
        match guard.send(buf.to_vec()) {
            Ok(()) => Poll::Ready(Ok(buf.len())),
            Err(_) => Poll::Ready(Err(Into::<std::io::Error>::into(
                std::io::ErrorKind::BrokenPipe,
            ))),
        }
    }
    fn poll_flush(self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<io::Result<()>> {
        Poll::Ready(Ok(()))
    }
    fn poll_shutdown(self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<io::Result<()>> {
        Poll::Ready(Ok(()))
    }
}

impl AsyncRead for WasiPipe {
    fn poll_read(
        self: Pin<&mut Self>,
        cx: &mut Context<'_>,
        buf: &mut tokio::io::ReadBuf<'_>,
    ) -> Poll<io::Result<()>> {
        let mut rx = self.rx.lock().unwrap();
        loop {
            {
                if let Some(inner_buf) = rx.buffer.as_mut() {
                    let buf_len = inner_buf.len();
                    if buf_len > 0 {
                        let read = buf_len.min(buf.remaining());
                        buf.put_slice(&inner_buf[..read]);
                        inner_buf.advance(read);
                        return Poll::Ready(Ok(()));
                    }
                }
            }
            let mut rx = Pin::new(rx.deref_mut());
            let data = match rx.chan.poll_recv(cx) {
                Poll::Ready(Some(a)) => a,
                Poll::Ready(None) => return Poll::Ready(Ok(())),
                Poll::Pending => {
                    return match self.block {
                        true => Poll::Pending,
                        false => {
                            Poll::Ready(Err(Into::<io::Error>::into(io::ErrorKind::WouldBlock)))
                        }
                    }
                }
            };

            rx.buffer.replace(Bytes::from(data));
        }
    }
}

impl VirtualFile for WasiPipe {
    /// the last time the file was accessed in nanoseconds as a UNIX timestamp
    fn last_accessed(&self) -> u64 {
        0
    }

    /// the last time the file was modified in nanoseconds as a UNIX timestamp
    fn last_modified(&self) -> u64 {
        0
    }

    /// the time at which the file was created in nanoseconds as a UNIX timestamp
    fn created_time(&self) -> u64 {
        0
    }

    /// the size of the file in bytes
    fn size(&self) -> u64 {
        0
    }

    /// Change the size of the file, if the `new_size` is greater than the current size
    /// the extra bytes will be allocated and zeroed
    fn set_len(&mut self, _new_size: u64) -> Result<(), FsError> {
        Ok(())
    }

    /// Request deletion of the file
    fn unlink(&mut self) -> Result<(), FsError> {
        Ok(())
    }

    /// Indicates if the file is opened or closed. This function must not block
    /// Defaults to a status of being constantly open
    fn is_open(&self) -> bool {
        self.tx
            .try_lock()
            .map(|a| !a.is_closed())
            .unwrap_or_else(|_| true)
    }

    /// Polls the file for when there is data to be read
    fn poll_read_ready(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<io::Result<usize>> {
        let mut rx = self.rx.lock().unwrap();
        loop {
            {
                if let Some(inner_buf) = rx.buffer.as_mut() {
                    let buf_len = inner_buf.len();
                    if buf_len > 0 {
                        return Poll::Ready(Ok(buf_len));
                    }
                }
            }

            let mut pinned_rx = Pin::new(&mut rx.chan);
            let data = match pinned_rx.poll_recv(cx) {
                Poll::Ready(Some(a)) => a,
                Poll::Ready(None) => return Poll::Ready(Ok(0)),
                Poll::Pending => {
                    return match self.block {
                        true => Poll::Pending,
                        false => {
                            Poll::Ready(Err(Into::<io::Error>::into(io::ErrorKind::WouldBlock)))
                        }
                    }
                }
            };

            rx.buffer.replace(Bytes::from(data));
        }
    }

    /// Polls the file for when it is available for writing
    fn poll_write_ready(self: Pin<&mut Self>, _cx: &mut Context<'_>) -> Poll<io::Result<usize>> {
        let tx = self.tx.lock().unwrap();
        if tx.is_closed() {
            Poll::Ready(Ok(0))
        } else {
            Poll::Ready(Ok(8192))
        }
    }
}