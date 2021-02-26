const REGISTRY = new Symbol()

function DHIS2ModuleRegistry() {
    this[REGISTRY] = {}
}

DHIS2ModuleRegistry.prototype.register = function (name, version, module, dependencies) {
    const modules = this[REGISTRY][name] = this[REGISTRY][name] || {}
    if (modules[version]) {
        throw new Error('Attempted to register duplicate modules with the same version')
    }
    modules[version] = {
        module,
        loaded: false,
        version,
        dependencies
    }
}

// const parseIdentifier = identifier => {
//     if (identifier.length <= 1) {
//         return null
//     }
//     const splitIndex = identifier.indexOf('@', 1)
//     const fullName = identifier.substr(0, splitIndex)
//     const version = identifier.substr(splitIndex + 1)
//     let scope = null
//     let name = fullName
//     const scopeSeparatorIndex = fullName.indexOf('/')
//     if (fullName[0] === '@' && scopeSeparatorIndex !== -1) {
//         scope = fullName.substr(0, scopeSeparatorIndex)
//         name = fullName.substr(scopeSeparatorIndex + 1)
//     }

//     return {
//         name,
//         fullName,
//         scope,
//         version
//     }
// }

// DHIS2ModuleRegistry.prototype.getContext

// DHIS2ModuleRegistry.prototype.import = async (identifier, parentScope, dependencies) => {
//     const { fullName, version } = parseIdentifier(identifier)
    
//     const missingDependencies = []
//     const loadingPromises = Object.keys(dependencies).map(key => 
//         System.import(key, parentScope).catch(() => missingDependencies.push(key))
//     )

//     await Promise.all(loadingPromises)
//     if (missingDependencies.length) {
        
//     }
// }

export default window.DHIS2ModuleRegistry || (window.DHIS2ModuleRegistry = new DHIS2ModuleRegistry())