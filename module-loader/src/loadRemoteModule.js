import registry from './DHIS2ModuleRegistry'

const loadDHIS2Module = async (url, type) => {
    const getLoadedModule = () => {
        const loadedModule = registry.getLastRegistration()
        if (!loadedModule) {
            throw new Error(`Failed to load module at ${url}`)
        }
        return loadedModule
    }

    return new Promise((resolve, reject) => {
        const element = document.createElement("script");
        
        element.src = url;
        element.type = type === 'module' ? 'module' : "text/javascript"
        element.async = false;

        const cleanup = () => {
            console.log(`Dynamic Script Removed: ${url}`);
            document.head.removeChild(element);
        }

        element.onload = () => {
            console.log(`Dynamic Script Loaded: ${url}`);
            try {
                resolve(getLoadedModule())
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

export const loadRemoteModule = async (uri) => {
    const [url, type] = uri.split('#')

    switch (type) {
        case 'system':
            return await window.System.import(url)
        case 'module':
        case 'dhis2':
        default:
            return await loadDHIS2Module(url, type)
    }
}