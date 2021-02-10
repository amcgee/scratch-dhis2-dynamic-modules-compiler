import App from 'app'
import React from 'react'
import { Shell } from 'shell'
import ReactDOM from 'react-dom'

console.log(
    'bootstrap.js::__webpack_share_scopes__.default',
    __webpack_share_scopes__.default
)

const appName = require('../d2.config.js').title

const config = {
    url: process.env.REACT_APP_DHIS2_BASE_URL,
    apiVersion: 34,
}
ReactDOM.render(
    <Shell baseConfig={config} appName={appName}>
        <App />
    </Shell>,
    document.getElementById('root')
)
