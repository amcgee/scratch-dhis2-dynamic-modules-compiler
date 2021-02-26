import postcss from 'rollup-plugin-postcss'

export default ({ mode }) => 
    postcss({
        autoModules: true,
        plugins: [
        // TODO: PostCSS prefix plugin
        ],
    })