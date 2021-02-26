const registry = window.DHIS2ModuleRegistry || (window.DHIS2ModuleRegistry = {})

function add({ name, version, dependencies }) {
    registry[name] = registry[name] || {}
    registry[name][version] = {
        name,
        version,
        dependencies,
        loaded: false
    }
}

function load(name, version) {
    Object.keys(dependencies).forEach(depName => {
        const depVersionRange = dependencies[depName]
        if (registry[depName]) {
            const candidateVersions = Object.keys(registry[depName])
            const loadedVersions = candidateVersions.filter(candidate => registry[depName][candidate].loaded)
            const availableVersions = candidateVersions.filter(candidate => !registry[depName][candidate].loaded)

            const rangePredicate = makeRangePredicate(depVersionRange)
            const versionToLoad = loadedVersion.find(rangePredicate) || availableVersions.find(rangePredicate)
        }

    })
}

add({
    name: 'headerbar',
    version: '1.0.0',
    dependencies: {
        "react": "^16.8",
        "react-dom": "^16.8"
    }
})