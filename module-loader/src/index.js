
// const productionShell = `${process.env.REACT_APP_DHIS2_BASE_URL}/api/apps/shell/remoteEntry.js`
// const devShell = localStorage.getItem('DHIS2_SHELL_OVERRIDE')
// const localShell = () => import('@dhis2/app-adapter')

export { DHIS2ModuleRegistry as registry } from './DHIS2ModuleRegistry'
export { DynamicModuleLoader } from './DynamicModuleLoader'
export { loadRemoteModule } from './loadRemoteModule'
export { loadModuleWithFallbacks } from './loadModuleWithFallbacks'
export { loadImportMap } from './loadImportMap'