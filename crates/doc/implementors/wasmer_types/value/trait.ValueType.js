(function() {var implementors = {};
implementors["wasmer"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"wasmer/trait.ValueType.html\" title=\"trait wasmer::ValueType\">ValueType</a>, M:&nbsp;<a class=\"trait\" href=\"wasmer/trait.MemorySize.html\" title=\"trait wasmer::MemorySize\">MemorySize</a>&gt; <a class=\"trait\" href=\"wasmer/trait.ValueType.html\" title=\"trait wasmer::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer/sys/ptr/struct.WasmPtr.html\" title=\"struct wasmer::sys::ptr::WasmPtr\">WasmPtr</a>&lt;T, M&gt;","synthetic":false,"types":["wasmer::sys::ptr::WasmPtr"]}];
implementors["wasmer_emscripten"] = [{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_emscripten/env/struct.EmAddrInfo.html\" title=\"struct wasmer_emscripten::env::EmAddrInfo\">EmAddrInfo</a>","synthetic":false,"types":["wasmer_emscripten::env::EmAddrInfo"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_emscripten/env/struct.EmSockAddr.html\" title=\"struct wasmer_emscripten::env::EmSockAddr\">EmSockAddr</a>","synthetic":false,"types":["wasmer_emscripten::env::EmSockAddr"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_emscripten/syscalls/unix/struct.EmPollFd.html\" title=\"struct wasmer_emscripten::syscalls::unix::EmPollFd\">EmPollFd</a>","synthetic":false,"types":["wasmer_emscripten::syscalls::unix::EmPollFd"]}];
implementors["wasmer_types"] = [];
implementors["wasmer_wasi_types"] = [{"text":"impl&lt;O&gt; <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/asyncify/struct.__wasi_asyncify_t.html\" title=\"struct wasmer_wasi_types::asyncify::__wasi_asyncify_t\">__wasi_asyncify_t</a>&lt;O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a>,&nbsp;</span>","synthetic":false,"types":["wasmer_wasi_types::asyncify::__wasi_asyncify_t"]},{"text":"impl&lt;M:&nbsp;<a class=\"trait\" href=\"wasmer_types/memory/trait.MemorySize.html\" title=\"trait wasmer_types::memory::MemorySize\">MemorySize</a>&gt; <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/io/struct.__wasi_ciovec_t.html\" title=\"struct wasmer_wasi_types::types::io::__wasi_ciovec_t\">__wasi_ciovec_t</a>&lt;M&gt;","synthetic":false,"types":["wasmer_wasi_types::types::io::__wasi_ciovec_t"]},{"text":"impl&lt;M:&nbsp;<a class=\"trait\" href=\"wasmer_types/memory/trait.MemorySize.html\" title=\"trait wasmer_types::memory::MemorySize\">MemorySize</a>&gt; <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/io/struct.__wasi_iovec_t.html\" title=\"struct wasmer_wasi_types::types::io::__wasi_iovec_t\">__wasi_iovec_t</a>&lt;M&gt;","synthetic":false,"types":["wasmer_wasi_types::types::io::__wasi_iovec_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/net/struct.__wasi_hardwareaddress_t.html\" title=\"struct wasmer_wasi_types::types::net::__wasi_hardwareaddress_t\">__wasi_hardwareaddress_t</a>","synthetic":false,"types":["wasmer_wasi_types::types::net::__wasi_hardwareaddress_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/net/struct.__wasi_addr_ip4_t.html\" title=\"struct wasmer_wasi_types::types::net::__wasi_addr_ip4_t\">__wasi_addr_ip4_t</a>","synthetic":false,"types":["wasmer_wasi_types::types::net::__wasi_addr_ip4_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/net/struct.__wasi_addr_ip4_port_t.html\" title=\"struct wasmer_wasi_types::types::net::__wasi_addr_ip4_port_t\">__wasi_addr_ip4_port_t</a>","synthetic":false,"types":["wasmer_wasi_types::types::net::__wasi_addr_ip4_port_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/net/struct.__wasi_cidr_ip4_t.html\" title=\"struct wasmer_wasi_types::types::net::__wasi_cidr_ip4_t\">__wasi_cidr_ip4_t</a>","synthetic":false,"types":["wasmer_wasi_types::types::net::__wasi_cidr_ip4_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/net/struct.__wasi_addr_unix_t.html\" title=\"struct wasmer_wasi_types::types::net::__wasi_addr_unix_t\">__wasi_addr_unix_t</a>","synthetic":false,"types":["wasmer_wasi_types::types::net::__wasi_addr_unix_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/net/struct.__wasi_addr_unix_port_t.html\" title=\"struct wasmer_wasi_types::types::net::__wasi_addr_unix_port_t\">__wasi_addr_unix_port_t</a>","synthetic":false,"types":["wasmer_wasi_types::types::net::__wasi_addr_unix_port_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/net/struct.__wasi_cidr_unix_t.html\" title=\"struct wasmer_wasi_types::types::net::__wasi_cidr_unix_t\">__wasi_cidr_unix_t</a>","synthetic":false,"types":["wasmer_wasi_types::types::net::__wasi_cidr_unix_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/net/struct.__wasi_addr_ip6_t.html\" title=\"struct wasmer_wasi_types::types::net::__wasi_addr_ip6_t\">__wasi_addr_ip6_t</a>","synthetic":false,"types":["wasmer_wasi_types::types::net::__wasi_addr_ip6_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/net/struct.__wasi_addr_ip6_port_t.html\" title=\"struct wasmer_wasi_types::types::net::__wasi_addr_ip6_port_t\">__wasi_addr_ip6_port_t</a>","synthetic":false,"types":["wasmer_wasi_types::types::net::__wasi_addr_ip6_port_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/net/struct.__wasi_cidr_ip6_t.html\" title=\"struct wasmer_wasi_types::types::net::__wasi_cidr_ip6_t\">__wasi_cidr_ip6_t</a>","synthetic":false,"types":["wasmer_wasi_types::types::net::__wasi_cidr_ip6_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/net/struct.__wasi_addr_u.html\" title=\"struct wasmer_wasi_types::types::net::__wasi_addr_u\">__wasi_addr_u</a>","synthetic":false,"types":["wasmer_wasi_types::types::net::__wasi_addr_u"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/net/struct.__wasi_addr_t.html\" title=\"struct wasmer_wasi_types::types::net::__wasi_addr_t\">__wasi_addr_t</a>","synthetic":false,"types":["wasmer_wasi_types::types::net::__wasi_addr_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/net/struct.__wasi_addr_port_u.html\" title=\"struct wasmer_wasi_types::types::net::__wasi_addr_port_u\">__wasi_addr_port_u</a>","synthetic":false,"types":["wasmer_wasi_types::types::net::__wasi_addr_port_u"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/net/struct.__wasi_addr_port_t.html\" title=\"struct wasmer_wasi_types::types::net::__wasi_addr_port_t\">__wasi_addr_port_t</a>","synthetic":false,"types":["wasmer_wasi_types::types::net::__wasi_addr_port_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/net/struct.__wasi_cidr_u.html\" title=\"struct wasmer_wasi_types::types::net::__wasi_cidr_u\">__wasi_cidr_u</a>","synthetic":false,"types":["wasmer_wasi_types::types::net::__wasi_cidr_u"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/net/struct.__wasi_cidr_t.html\" title=\"struct wasmer_wasi_types::types::net::__wasi_cidr_t\">__wasi_cidr_t</a>","synthetic":false,"types":["wasmer_wasi_types::types::net::__wasi_cidr_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/net/struct.Route.html\" title=\"struct wasmer_wasi_types::types::net::Route\">Route</a>","synthetic":false,"types":["wasmer_wasi_types::types::net::Route"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"enum\" href=\"wasmer_wasi_types/wasi/bindings/enum.Snapshot0Clockid.html\" title=\"enum wasmer_wasi_types::wasi::bindings::Snapshot0Clockid\">Snapshot0Clockid</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Snapshot0Clockid"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"enum\" href=\"wasmer_wasi_types/wasi/bindings/enum.Clockid.html\" title=\"enum wasmer_wasi_types::wasi::bindings::Clockid\">Clockid</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Clockid"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"enum\" href=\"wasmer_wasi_types/wasi/bindings/enum.Errno.html\" title=\"enum wasmer_wasi_types::wasi::bindings::Errno\">Errno</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Errno"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"enum\" href=\"wasmer_wasi_types/wasi/bindings/enum.BusErrno.html\" title=\"enum wasmer_wasi_types::wasi::bindings::BusErrno\">BusErrno</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::BusErrno"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.Rights.html\" title=\"struct wasmer_wasi_types::wasi::bindings::Rights\">Rights</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Rights"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"enum\" href=\"wasmer_wasi_types/wasi/bindings/enum.Filetype.html\" title=\"enum wasmer_wasi_types::wasi::bindings::Filetype\">Filetype</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Filetype"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.Snapshot0Dirent.html\" title=\"struct wasmer_wasi_types::wasi::bindings::Snapshot0Dirent\">Snapshot0Dirent</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Snapshot0Dirent"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.Dirent.html\" title=\"struct wasmer_wasi_types::wasi::bindings::Dirent\">Dirent</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Dirent"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"enum\" href=\"wasmer_wasi_types/wasi/bindings/enum.Advice.html\" title=\"enum wasmer_wasi_types::wasi::bindings::Advice\">Advice</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Advice"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.Fdflags.html\" title=\"struct wasmer_wasi_types::wasi::bindings::Fdflags\">Fdflags</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Fdflags"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.Fdstat.html\" title=\"struct wasmer_wasi_types::wasi::bindings::Fdstat\">Fdstat</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Fdstat"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.Fstflags.html\" title=\"struct wasmer_wasi_types::wasi::bindings::Fstflags\">Fstflags</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Fstflags"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.Lookup.html\" title=\"struct wasmer_wasi_types::wasi::bindings::Lookup\">Lookup</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Lookup"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/file/struct.Oflags.html\" title=\"struct wasmer_wasi_types::types::file::Oflags\">Oflags</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Oflags"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"enum\" href=\"wasmer_wasi_types/types/subscription/enum.Eventtype.html\" title=\"enum wasmer_wasi_types::types::subscription::Eventtype\">Eventtype</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Eventtype"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.Subclockflags.html\" title=\"struct wasmer_wasi_types::wasi::bindings::Subclockflags\">Subclockflags</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Subclockflags"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.Snapshot0SubscriptionClock.html\" title=\"struct wasmer_wasi_types::wasi::bindings::Snapshot0SubscriptionClock\">Snapshot0SubscriptionClock</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Snapshot0SubscriptionClock"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.SubscriptionClock.html\" title=\"struct wasmer_wasi_types::wasi::bindings::SubscriptionClock\">SubscriptionClock</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::SubscriptionClock"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"enum\" href=\"wasmer_wasi_types/wasi/bindings/enum.Preopentype.html\" title=\"enum wasmer_wasi_types::wasi::bindings::Preopentype\">Preopentype</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Preopentype"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.Eventrwflags.html\" title=\"struct wasmer_wasi_types::wasi::bindings::Eventrwflags\">Eventrwflags</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Eventrwflags"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.EventFdReadwrite.html\" title=\"struct wasmer_wasi_types::wasi::bindings::EventFdReadwrite\">EventFdReadwrite</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::EventFdReadwrite"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/subscription/struct.SubscriptionFsReadwrite.html\" title=\"struct wasmer_wasi_types::types::subscription::SubscriptionFsReadwrite\">SubscriptionFsReadwrite</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::SubscriptionFsReadwrite"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"enum\" href=\"wasmer_wasi_types/wasi/bindings/enum.Socktype.html\" title=\"enum wasmer_wasi_types::wasi::bindings::Socktype\">Socktype</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Socktype"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"enum\" href=\"wasmer_wasi_types/wasi/bindings/enum.Sockstatus.html\" title=\"enum wasmer_wasi_types::wasi::bindings::Sockstatus\">Sockstatus</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Sockstatus"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"enum\" href=\"wasmer_wasi_types/wasi/bindings/enum.Sockoption.html\" title=\"enum wasmer_wasi_types::wasi::bindings::Sockoption\">Sockoption</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Sockoption"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"enum\" href=\"wasmer_wasi_types/wasi/bindings/enum.Streamsecurity.html\" title=\"enum wasmer_wasi_types::wasi::bindings::Streamsecurity\">Streamsecurity</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Streamsecurity"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"enum\" href=\"wasmer_wasi_types/wasi/bindings/enum.Addressfamily.html\" title=\"enum wasmer_wasi_types::wasi::bindings::Addressfamily\">Addressfamily</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Addressfamily"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.Snapshot0Filestat.html\" title=\"struct wasmer_wasi_types::wasi::bindings::Snapshot0Filestat\">Snapshot0Filestat</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Snapshot0Filestat"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.Filestat.html\" title=\"struct wasmer_wasi_types::wasi::bindings::Filestat\">Filestat</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Filestat"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"enum\" href=\"wasmer_wasi_types/wasi/bindings/enum.Snapshot0Whence.html\" title=\"enum wasmer_wasi_types::wasi::bindings::Snapshot0Whence\">Snapshot0Whence</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Snapshot0Whence"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"enum\" href=\"wasmer_wasi_types/wasi/bindings/enum.Whence.html\" title=\"enum wasmer_wasi_types::wasi::bindings::Whence\">Whence</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Whence"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.Tty.html\" title=\"struct wasmer_wasi_types::wasi::bindings::Tty\">Tty</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Tty"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"enum\" href=\"wasmer_wasi_types/types/io/enum.OptionTag.html\" title=\"enum wasmer_wasi_types::types::io::OptionTag\">OptionTag</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::OptionTag"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.OptionBid.html\" title=\"struct wasmer_wasi_types::wasi::bindings::OptionBid\">OptionBid</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::OptionBid"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.OptionCid.html\" title=\"struct wasmer_wasi_types::wasi::bindings::OptionCid\">OptionCid</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::OptionCid"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.OptionFd.html\" title=\"struct wasmer_wasi_types::wasi::bindings::OptionFd\">OptionFd</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::OptionFd"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.BusHandles.html\" title=\"struct wasmer_wasi_types::wasi::bindings::BusHandles\">BusHandles</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::BusHandles"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.BusEventExit.html\" title=\"struct wasmer_wasi_types::wasi::bindings::BusEventExit\">BusEventExit</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::BusEventExit"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.BusEventFault.html\" title=\"struct wasmer_wasi_types::wasi::bindings::BusEventFault\">BusEventFault</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::BusEventFault"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.BusEventClose.html\" title=\"struct wasmer_wasi_types::wasi::bindings::BusEventClose\">BusEventClose</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::BusEventClose"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.PrestatUDir.html\" title=\"struct wasmer_wasi_types::wasi::bindings::PrestatUDir\">PrestatUDir</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::PrestatUDir"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.PrestatU.html\" title=\"struct wasmer_wasi_types::wasi::bindings::PrestatU\">PrestatU</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::PrestatU"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.PipeHandles.html\" title=\"struct wasmer_wasi_types::wasi::bindings::PipeHandles\">PipeHandles</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::PipeHandles"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"enum\" href=\"wasmer_wasi_types/types/io/enum.StdioMode.html\" title=\"enum wasmer_wasi_types::types::io::StdioMode\">StdioMode</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::StdioMode"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"enum\" href=\"wasmer_wasi_types/types/net/enum.SockProto.html\" title=\"enum wasmer_wasi_types::types::net::SockProto\">SockProto</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::SockProto"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"enum\" href=\"wasmer_wasi_types/types/io/enum.Bool.html\" title=\"enum wasmer_wasi_types::types::io::Bool\">Bool</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Bool"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/time/struct.OptionTimestamp.html\" title=\"struct wasmer_wasi_types::types::time::OptionTimestamp\">OptionTimestamp</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::OptionTimestamp"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"enum\" href=\"wasmer_wasi_types/types/signal/enum.Signal.html\" title=\"enum wasmer_wasi_types::types::signal::Signal\">Signal</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Signal"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/net/struct.AddrUnspec.html\" title=\"struct wasmer_wasi_types::types::net::AddrUnspec\">AddrUnspec</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::AddrUnspec"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/net/struct.AddrUnspecPort.html\" title=\"struct wasmer_wasi_types::types::net::AddrUnspecPort\">AddrUnspecPort</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::AddrUnspecPort"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/net/struct.CidrUnspec.html\" title=\"struct wasmer_wasi_types::types::net::CidrUnspec\">CidrUnspec</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::CidrUnspec"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/net/struct.HttpHandles.html\" title=\"struct wasmer_wasi_types::types::net::HttpHandles\">HttpHandles</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::HttpHandles"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/types/net/struct.HttpStatus.html\" title=\"struct wasmer_wasi_types::types::net::HttpStatus\">HttpStatus</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::HttpStatus"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"enum\" href=\"wasmer_wasi_types/types/net/enum.Timeout.html\" title=\"enum wasmer_wasi_types::types::net::Timeout\">Timeout</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Timeout"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/bindings/struct.Prestat.html\" title=\"struct wasmer_wasi_types::wasi::bindings::Prestat\">Prestat</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::bindings::Prestat"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/wasix_manual/struct.Snapshot0Subscription.html\" title=\"struct wasmer_wasi_types::wasi::wasix_manual::Snapshot0Subscription\">Snapshot0Subscription</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::wasix_manual::Snapshot0Subscription"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/wasix_manual/struct.Snapshot0Event.html\" title=\"struct wasmer_wasi_types::wasi::wasix_manual::Snapshot0Event\">Snapshot0Event</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::wasix_manual::Snapshot0Event"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/wasix_manual/struct.Subscription.html\" title=\"struct wasmer_wasi_types::wasi::wasix_manual::Subscription\">Subscription</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::wasix_manual::Subscription"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/wasix_manual/struct.Event.html\" title=\"struct wasmer_wasi_types::wasi::wasix_manual::Event\">Event</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::wasix_manual::Event"]},{"text":"impl <a class=\"trait\" href=\"wasmer_types/value/trait.ValueType.html\" title=\"trait wasmer_types::value::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi_types/wasi/wasix_manual/struct.StackSnapshot.html\" title=\"struct wasmer_wasi_types::wasi::wasix_manual::StackSnapshot\">StackSnapshot</a>","synthetic":false,"types":["wasmer_wasi_types::wasi::wasix_manual::StackSnapshot"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()