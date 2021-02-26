import { loadImportMap } from "./loadImportMap"

export const tryWithImportMapFallbacks = async (fn, fallbackImportMaps, loadFirstMap = false) => {
    fallbackImportMaps = Array.isArray(fallbackImportMaps) ? fallbackImportMaps : [fallbackImportMaps]
    
    if (!fallbackImportMaps.length) {
        throw new Error('Exhausted all available falback import maps, failed too execute function')
    }

    try {
        if (loadFirstMap) {
            await loadImportMap(fallbackImportMaps[0])
        }
        return await fn()
    } catch (e) {
        return await tryWithImportMapFallbacks(fn, fallbackImportMaps.slice(loadFirstMap ? 1 : 0), true)
    }
}