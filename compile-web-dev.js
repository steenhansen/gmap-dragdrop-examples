
// node compile-web-dev.js

_GDDR_DEBUG_MODE_ =true

// same as "webpack --progress --colors --watch"
const webpack = require("webpack")
let webpackConfiguration = require(`./webpack.config.js`)
const compiler = webpack(webpackConfiguration)
compiler.run((err_ignored, stats_ignored) => {
})

