const url = docuument.currentScript.src
const entrypoints = __ENTRYPOINTS__

const init = async (depCache) => {
    const dependencies = __DEPENDENCIES__

    Object.keys(dependencies).forEach(dep => {

    })
    // TODO: check shared dependencies and load optional fallbacks
    console.log((await import('./test')).answer)
    return await System.import('./index')
}

const get = async (moduleName) => {

}

import { name, version } from '../package.json'

window.DHIS2ModuleRegistry.lastRegistration = {
    name,
    version,
    url,
    dependencies,
    bootstrap
}