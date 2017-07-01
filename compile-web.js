
// node compile-web.js

// same as "webpack --progress --colors --watch"
const webpack = require("webpack")
let webpackConfiguration = require(`./webpack.config.js`)
const compiler = webpack(webpackConfiguration)
compiler.run((err_ignored, stats_ignored) => {
})

