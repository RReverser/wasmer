use core::ops::Deref;

#[cfg(feature = "sys")]
use crate::sys::engine as engine_imp;
#[cfg(feature = "sys")]
pub(crate) use crate::sys::engine::default_engine;

#[cfg(feature = "js")]
use crate::js::engine as engine_imp;
#[cfg(feature = "js")]
pub(crate) use crate::js::engine::default_engine;

/// The engine type
pub struct Engine(pub(crate) engine_imp::Engine);

impl AsEngineRef for Engine {
    fn as_engine_ref(&self) -> EngineRef {
        EngineRef { inner: self }
    }
}

impl Default for Engine {
    fn default() -> Self {
        Engine(default_engine())
    }
}

// impl Into<Engine> for engine_imp::Engine {
//     fn into(self) -> Engine {
//         Engine(self)
//     }
// }

impl From<engine_imp::Engine> for Engine {
    fn from(inner: engine_imp::Engine) -> Self {
        Self(inner)
    }
}

// impl<P> Into<Engine> for P
// where
//     P: Into<engine_imp::Engine>
// {
//     fn into(self) -> Engine {
//         let inner_engine: engine_imp::Engine = self.into();
//         Engine(inner_engine)
//     }
// }

/// A temporary handle to an [`Engine`]
/// EngineRef can be used to build a [`Module`][wasmer::Module]
/// It can be created directly with an [`Engine`]
/// Or from anything implementing [`AsEngineRef`]
/// like from [`Store`][wasmer::Store] typicaly.
pub struct EngineRef<'a> {
    /// The inner engine
    pub(crate) inner: &'a Engine,
}

impl<'a> EngineRef<'a> {
    /// Get inner [`Engine`]
    pub fn engine(&self) -> &Engine {
        self.inner
    }
    /// Create an EngineRef from an Engine
    pub fn new(engine: &'a Engine) -> Self {
        EngineRef { inner: engine }
    }
}

/// Helper trait for a value that is convertible to a [`EngineRef`].
pub trait AsEngineRef {
    /// Returns a `EngineRef` pointing to the underlying context.
    fn as_engine_ref(&self) -> EngineRef<'_>;
}

impl AsEngineRef for EngineRef<'_> {
    fn as_engine_ref(&self) -> EngineRef<'_> {
        EngineRef { inner: self.inner }
    }
}

impl<P> AsEngineRef for P
where
    P: Deref,
    P::Target: AsEngineRef,
{
    fn as_engine_ref(&self) -> EngineRef<'_> {
        (**self).as_engine_ref()
    }
}
