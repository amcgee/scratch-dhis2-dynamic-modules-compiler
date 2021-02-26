import AppAdapter from '@dhis2/app-adapter'

import { CssReset } from '@dhis2/ui'
import React from 'react'

const appConfig = {
    url:
        process.env.REACT_APP_DHIS2_BASE_URL ||
        window.localStorage.DHIS2_BASE_URL,
    appName: process.env.REACT_APP_DHIS2_APP_NAME || '',
}

const Shell = ({ children }) => 
    <>
        <CssReset />
        <AppAdapter {...appConfig}>
            {children}
        </AppAdapter>
    </>

export default Shell