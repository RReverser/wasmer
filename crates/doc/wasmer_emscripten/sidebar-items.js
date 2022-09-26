initSidebarItems({"constant":[["GLOBAL_BASE",""],["STATIC_BASE",""],["STATIC_BUMP",""],["TOTAL_STACK",""],["VERSION","The current version of this crate"]],"fn":[["align_memory",""],["allocate_cstr_on_stack","Safety"],["allocate_on_stack","Safety"],["emscripten_call_main","Call the main function in emscripten, assumes that the emscripten state is set up."],["emscripten_get_main_func_name","Looks for variations of the main function (usually `[\"_main\", \"main\"])`, then returns a reference to the name of the first found function. Useful for determining whether a module is executable."],["emscripten_set_up_memory",""],["generate_emscripten_env",""],["get_emscripten_memory_size",""],["get_emscripten_metadata","Reads values written by `-s EMIT_EMSCRIPTEN_METADATA=1` Assumes values start from the end in this order: Last export: Dynamic Base Second-to-Last export: Dynamic top pointer"],["get_emscripten_table_size",""],["is_emscripten_module","We check if a provided module is an Emscripten generated one"],["nullfunc",""],["run_emscripten_instance","Top level function to execute emscripten"],["set_up_emscripten","Call the global constructors for C++ and set up the emscripten environment."],["static_alloc",""],["store_module_arguments",""]],"mod":[["bitwise",""],["emscripten_target",""],["env",""],["errno",""],["exception",""],["exec",""],["exit",""],["inet",""],["io",""],["jmp",""],["libc",""],["linking",""],["lock",""],["macros",""],["math",""],["memory",""],["process",""],["pthread",""],["signal",""],["storage",""],["syscalls",""],["time",""],["ucontext",""],["unistd",""],["utils",""],["varargs",""]],"struct":[["EmEnv","The environment provided to the Emscripten imports."],["EmscriptenData",""],["EmscriptenFunctions",""],["EmscriptenGlobals",""],["EmscriptenGlobalsData",""],["LibcDirWrapper",""],["OLD_ABORT_ON_CANNOT_GROW_MEMORY_SIG",""]]});