// console.log('index.js::__webpack_share_scopes__.default', JSON.stringify(__webpack_share_scopes__.default))

const start = async (module) => {
    console.log('MODULE', module)
    await __webpack_init_sharing__("default");
    // console.log(await import('shell'))
    // console.log('index.js::__webpack_share_scopes__.default #2', JSON.stringify(__webpack_share_scopes__.default, undefined, 2))
    import('./bootstrap')
}

const loadRemoteModule = async (url, scope, module) => {
    const loadComponent = async () => {
        // Initializes the share scope. This fills it with known provided modules from this build and all remotes
        await __webpack_init_sharing__("default");
        const container = window[scope]; // or get the container somewhere else
        // Initialize the container, it may provide shared modules
        await container.init(__webpack_share_scopes__.default);
        const factory = await window[scope].get(module);
        const Module = factory();
        return Module;
    }

    return new Promise((resolve, reject) => {
        const element = document.createElement("script");
        
        element.src = url;
        element.type = "text/javascript";
        element.async = true;

        const cleanup = () => {
            console.log(`Dynamic Script Removed: ${url}`);
            document.head.removeChild(element);
        }

        element.onload = () => {
            console.log(`Dynamic Script Loaded: ${url}`);
            try {
                loadComponent().then(resolve)
            } catch (e) {
                cleanup()
                reject()
            }
        };

        element.onerror = () => {
            console.error(`Dynamic Script Error: ${url}`);
            cleanup()
            reject()
        };

        document.head.appendChild(element);
    })
}
const loadModuleWithFallbacks = async (urls, scope, module) => {
    for (let url of urls) {
        if (!url) {
            continue;
        }
        try {
            const result = await loadRemoteModule(url, scope, module)
            if (url !== urls[0]) {
                console.log(`Using fallback for remote ${scope} (${url})`)
            }
            return result
        } catch (err) {
        }
    }
    throw new Error(`Failed to load module ${scope} after trying all fallbacks`)
}

const productionShell = `${process.env.REACT_APP_DHIS2_BASE_URL}/api/apps/shell/remoteEntry.js`
const devShell = localStorage.getItem('DHIS2_SHELL_OVERRIDE')
const localShell = './shell/remoteEntry.js'
const loadShell = () => loadModuleWithFallbacks(
    [productionShell, devShell, localShell],
    'shell',
    '.'
)

loadShell()
    .then(start)