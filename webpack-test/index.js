const webpack = require('webpack')

const compiler = webpack(require('./webpack.config.js'))

compiler.watch({}, (err, stats) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    if (stats.hasErrors()) {
        console.error(stats.toString())
    }
    console.log(stats.toString())
})