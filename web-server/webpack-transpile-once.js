"use strict"

//  webpack-transpile-once.js

//webpack --progress --colors --watch
const webpack = require("webpack")
let webpackConfiguration = require(`../webpack.config.js`)
const compiler = webpack(webpackConfiguration)
compiler.run((err_ignored, stats_ignored) => {
})

