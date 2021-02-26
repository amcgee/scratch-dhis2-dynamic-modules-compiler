import React from 'react'
import PropTypes from 'prop-types'
import { loadRemoteModule } from './loadModuleWithFallbacks'

const DefaultErrorComponent = ({ error }) => <div>{error}</div>
const DefaultLoadingComponent = () => <div>...</div>

class DynamicModuleLoader {
    constructor({ loaders }) {
        const loaders = Array.isArray(loaders) ? loaders : [loaders]
        
        this.state = {
            loading: true,
            currentComponent: null,
            loaders
        }
    }

    tryNextFallback() {
        let nextLoader = this.state.loaders[0]
        if (!nextLoader) {
            this.setState({
                error: 'Failed to load all fallbacks'
            })
        }

        if (typeof nextLoader === 'string') {
            nextLoader = () => loadRemoteModule(nextLoader)
        }

        this.setState({
            currentComponent: React.lazy(nextLoader),
            loaders: this.state.loaders.slice(1)
        })
    }
    componentDidCatch() {
        this.tryNextFallback()
    }

    render() {
        const { errorComponent: Error, loadingComponent: Loading, props, children } = this.props
        const { currentComponent: Current, error } = this.state

        if (error) {
            return <Error error={error} />
        }
        if (!Current) {
            return <Loading />
        }
        return <React.Suspense fallback={<Loading />}>
            <Current {...props}>
                {children}
            </Current>
        </React.Suspense>
    }
}

const loaderPropType = PropTypes.oneOfType([PropTypes.func, PropTypes.string])
DynamicModuleLoader.propTypes = {
    loaders: PropTypes.oneOfType([loaderPropType, PropTypes.arrayOf(loaderPropType)]).isRequired,
    errorComponent: PropTypes.element,
    loadingComponent: PropTypes.element,
    props: PropTypes.object,
    children: PropTypes.node,
}
DynamicModuleLoader.defaultPropTypes = {
    errorComponent: DefaultErrorComponent,
    looadingComponent: DefaultLoadingComponent
}

export { DynamicModuleLoader }
export default DynamicModuleLoader