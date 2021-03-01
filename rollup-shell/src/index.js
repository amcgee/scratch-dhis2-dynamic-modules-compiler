import AppAdapter from '@dhis2/app-adapter'

import { CssReset } from '@dhis2/ui'
import React, { Suspense } from 'react'

const appConfig = {
    url:
        process.env.REACT_APP_DHIS2_BASE_URL ||
        window.localStorage.DHIS2_BASE_URL,
    appName: process.env.REACT_APP_DHIS2_APP_NAME || '',
}

const LazyApp = React.lazy(() => import(':dhis2/app'))

const Shell = ({ children }) => 
    <>
        <CssReset />
        <AppAdapter {...appConfig}>
            <Suspense fallback={<div>...</div>}>
                <LazyApp />
            </Suspense>
        </AppAdapter>
    </>

export default Shell