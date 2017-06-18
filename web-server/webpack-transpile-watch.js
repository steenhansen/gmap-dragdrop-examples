"use strict"

//  webpack-transpile-watch.js

//webpack --progress --colors --watch
let webpack = require("webpack")
let webpackConfiguration = require(`../webpack.config.js`)

const compiler = webpack(webpackConfiguration)
compiler.watch({watch: true}, (err_ignored, stats_ignored) => {
//},{})

}, {watchOptions: {aggregateTimeout: 300, poll: 1000}})

