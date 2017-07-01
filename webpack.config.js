'use strict'

// webpack --progress --colors --watch

const path = require('path')
var fs = require('fs');

const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const assetsPluginInstance = new AssetsPlugin({filename: 'web-server/webpack_js_chunks.json'})
const WatchTimePlugin = require('webpack-watch-time-plugin')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
const CompressionPlugin = require("compression-webpack-plugin")
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
new webpack.WatchIgnorePlugin(__dirname, './node_modules/')

const MAX_BYTES_INLINE_IMAGE_SIZE =8192

var NOP_DEFINE_PLUGIN = new webpack.DefinePlugin({
  NOP_EMPTY_PLUGIN: 'for developement'
})

if (fs.existsSync(__dirname +'/DEBUG')) {
  var _GDDR_DEBUG_MODE_=true
}else{
  var _GDDR_DEBUG_MODE_=false
}

var do_define_plugin = new webpack.DefinePlugin({
  __GDDR_DEBUG__: _GDDR_DEBUG_MODE_
})

if (_GDDR_DEBUG_MODE_) {
  var do_uglifyjs_plugin = NOP_DEFINE_PLUGIN
  var do_compression_plugin = NOP_DEFINE_PLUGIN
} else {
  var do_uglifyjs_plugin = new UglifyJSPlugin({
    minimize: true,
    compress: true
  })
  var do_compression_plugin = new CompressionPlugin({ asset: "[path].gz[query]"
                                                    , algorithm: "gzip"
                                                    , test: /\.(js|css|html|svg)$/
                                                    , threshold: 10240
                                                    , minRatio: 0.8 })
}

var do_cleanup_plugin = new WebpackCleanupPlugin({ exclude: ["shared_styles.css"
  , "gmap-resources/**/*.css"
  , "*.cur"
  , "my_polyfills*"
  , "gmap-resources/**/*"
  , "images/**/*"] })

var jsx_transpile = { test: /\.jsx$/
                    , exclude: /node_modules/
                    , loader: 'babel-loader' }

var inline_css = { test: /\.css$/
                 , loader: 'style-loader!css-loader' }

var inline_images = { test: /\.(png|jpg)$/
                    , loader: `url-loader?limit=${MAX_BYTES_INLINE_IMAGE_SIZE}` }

var react_cdns = { 'react': 'React'
                 , 'react-dom': 'ReactDOM'
                 , 'react-dom/server': 'ReactDOMServer' }

var jsx_entries ={ gmap_simple_entry: "./webpack-entry/gmap_simple_entry.jsx"
                 , gmap_events_entry: "./webpack-entry/gmap_events_entry.jsx"
                 , gmap_dynamic_entry: "./webpack-entry/gmap_dynamic_entry.jsx"
                 , gmap_activities_entry: "./webpack-entry/gmap_activities_entry.jsx"
                 , gmap_malls_entry: "./webpack-entry/gmap_malls_entry.jsx"
                 , gmap_hike_entry: "./webpack-entry/gmap_hike_entry.jsx" }

module.exports = {
    context: path.resolve(__dirname, './')
  , module: { loaders: [ jsx_transpile, inline_css, inline_images]  }
  , entry:  jsx_entries
  , output: { libraryTarget: "var"
            , library: ["GLOBAL_WEBPACK", "[name]"]
            , path: path.join(__dirname, "public")
            , filename: "[name].[chunkhash].js"
            , chunkFilename: "[chunkhash].js" }
  , externals: react_cdns
  , plugins: [assetsPluginInstance
            , WatchTimePlugin
            , do_define_plugin
            , do_uglifyjs_plugin
            , do_compression_plugin
            , new webpack.optimize.CommonsChunkPlugin({ name: 'commons'
                                                      , filename: "[name].[chunkhash].js"
                                                      , chunkFilename: "[chunkhash].js"
                                                      , minChunks: 2 })
            , do_cleanup_plugin ]
}


