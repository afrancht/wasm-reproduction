# Installing and Running

To reproduce the error

1. Do `npm install` from the base directory.
2. You can start the project by writing npm run dev-start (this will print Webpack configuration to the terminal as you asked)
3. Navigate to localhost:3000 in your browser
4. The Page that gets rendered is `LandingPage.js` which can be found in the `components` folder. Feel free to change any code you need or add any `console.logs`.

Thank you for your help!

# Environment Info

- npm v6.5.0.
- node v11.6.0
- webpack 4.39.2

# Error

If you uncomment line 9 in `LandingPage.js` and go to `localhost:3000` you will get the following error in the terminal:

```
[ error ] ./node_modules/argon2-browser/dist/argon2.wasm
Module not found: Can't resolve 'env' in '/path/wasm-reproduction/node_modules/argon2-browser/dist'

ModuleNotFoundError: Module not found: Error: Can't resolve 'env' in '/path/wasm-reproduction/node_modules/argon2-browser/dist'
    at factory.create (/path/wasm-reproduction/node_modules/next/node_modules/webpack/lib/Compilation.js:823:10)
    at factory (/path/wasm-reproduction/node_modules/next/node_modules/webpack/lib/NormalModuleFactory.js:397:22)
    at resolver (/path/wasm-reproduction/node_modules/next/node_modules/webpack/lib/NormalModuleFactory.js:130:21)
    at asyncLib.parallel (/path/wasm-reproduction/node_modules/next/node_modules/webpack/lib/NormalModuleFactory.js:224:22)
    at /path/wasm-reproduction/node_modules/neo-async/async.js:2830:7
    at /path/wasm-reproduction/node_modules/neo-async/async.js:6877:13
    at normalResolver.resolve (/path/wasm-reproduction/node_modules/next/node_modules/webpack/lib/NormalModuleFactory.js:214:25)
    at doResolve (/path/wasm-reproduction/node_modules/enhanced-resolve/lib/Resolver.js:184:12)
    at hook.callAsync (/path/wasm-reproduction/node_modules/enhanced-resolve/lib/Resolver.js:238:5)
    at _fn0 (eval at create (/path/wasm-reproduction/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)
    at resolver.doResolve (/path/wasm-reproduction/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:37:5)
    at hook.callAsync (/path/wasm-reproduction/node_modules/enhanced-resolve/lib/Resolver.js:238:5)
    at _fn0 (eval at create (/path/wasm-reproduction/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)
    at hook.callAsync (/path/wasm-reproduction/node_modules/enhanced-resolve/lib/Resolver.js:238:5)
    at _fn0 (eval at create (/path/wasm-reproduction/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)
    at resolver.doResolve (/path/wasm-reproduction/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:42:38)
ModuleNotFoundError: Module not found: Error: Can't resolve 'env' in '/path/wasm-reproduction/node_modules/argon2-browser/dist'
    at factory.create (/path/wasm-reproduction/node_modules/next/node_modules/webpack/lib/Compilation.js:823:10)
    at factory (/path/wasm-reproduction/node_modules/next/node_modules/webpack/lib/NormalModuleFactory.js:397:22)
    at resolver (/path/wasm-reproduction/node_modules/next/node_modules/webpack/lib/NormalModuleFactory.js:130:21)
    at asyncLib.parallel (/path/wasm-reproduction/node_modules/next/node_modules/webpack/lib/NormalModuleFactory.js:224:22)
    at /path/wasm-reproduction/node_modules/neo-async/async.js:2830:7
    at /path/wasm-reproduction/node_modules/neo-async/async.js:6877:13
    at normalResolver.resolve (/path/wasm-reproduction/node_modules/next/node_modules/webpack/lib/NormalModuleFactory.js:214:25)
    at doResolve (/path/wasm-reproduction/node_modules/enhanced-resolve/lib/Resolver.js:184:12)
    at hook.callAsync (/path/wasm-reproduction/node_modules/enhanced-resolve/lib/Resolver.js:238:5)
    at _fn0 (eval at create (/path/wasm-reproduction/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)
    at resolver.doResolve (/path/wasm-reproduction/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:37:5)
    at hook.callAsync (/path/wasm-reproduction/node_modules/enhanced-resolve/lib/Resolver.js:238:5)
    at _fn0 (eval at create (/path/wasm-reproduction/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)
    at hook.callAsync (/path/wasm-reproduction/node_modules/enhanced-resolve/lib/Resolver.js:238:5)
    at _fn0 (eval at create (/path/wasm-reproduction/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)
    at resolver.doResolve (/path/wasm-reproduction/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:42:38)
```
