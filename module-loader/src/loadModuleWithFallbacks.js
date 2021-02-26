export const loadModuleWithFallbacks = async (loadFns, scope, module) => {
    if (!Array.isArray(loadFns)) {
        loadFns = [loadFns]
    }
    for (let loadFn of loadFns) {
        if (!url) {
            continue;
        }
        try {
            if (typeof loadFn === 'string') {
                loadFn = () => loadRemoteModule(url, scope, module)
            }
            const result = await loadFn()
            if (loadFn !== loadFns[0]) {
                console.log(`Using fallback for remote ${scope} (${loadFn.name})`)
            }
            return result
        } catch (err) {
        }
    }
    throw new Error(`Failed to load module ${scope} after trying all fallbacks`)
}