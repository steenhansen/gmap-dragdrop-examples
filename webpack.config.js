'use strict'

// webpack --progress --colors --watch

const path = require('path')
const webpack = require('webpack')
var AssetsPlugin = require('assets-webpack-plugin')
var assetsPluginInstance = new AssetsPlugin({filename: 'web-server/webpack_js_chunks.json'})
const WatchTimePlugin = require('webpack-watch-time-plugin')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
var MergeFilesPlugin = require('merge-files-webpack-plugin')
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")

const CompressionPlugin = require("compression-webpack-plugin")
const BrotliPlugin = require('brotli-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

new webpack.WatchIgnorePlugin(__dirname, './node_modules/')
module.exports = {
  context: path.resolve(__dirname, './')
  , module: {
    loaders: [{
      test: /\.jsx$/
      , exclude: /node_modules/
      , loader: 'babel-loader'
    },
      {
        test: /\.css$/
        , loader: ExtractTextPlugin.extract({
        fallback: 'style-loader'
        , use: 'css-loader'
      })
      }
    ]
  }
  , entry: {
    gmap_simple_entry: "./webpack-entry/gmap_simple_entry.jsx"
    , gmap_events_entry: "./webpack-entry/gmap_events_entry.jsx"
    , gmap_dynamic_entry: "./webpack-entry/gmap_dynamic_entry.jsx"
    , gmap_activities_entry: "./webpack-entry/gmap_activities_entry.jsx"
    , gmap_malls_entry: "./webpack-entry/gmap_malls_entry.jsx"
    , gmap_hike_entry: "./webpack-entry/gmap_hike_entry.jsx"
  }
  , output: {
    libraryTarget: "var"
    , library: ["GLOBAL_WEBPACK", "[name]"]
    , path: path.join(__dirname, "public")
    , filename: "[name].[chunkhash].js"
    , chunkFilename: "[chunkhash].js"
  }
  , externals: {
    'react': 'React'
    , 'react-dom': 'ReactDOM'
    , 'react-dom/server': 'ReactDOMServer'
  }
  , plugins: [
    assetsPluginInstance
    , WatchTimePlugin
    , new ExtractTextPlugin({
      filename: '[name]._style_css_'
    }),
    new MergeFilesPlugin({
      filename: 'all_styles.css',
      test: /_style_css_/,
      deleteSourceFiles: true
    })
    , new OptimizeCssAssetsPlugin({
      assetNameRegExp: /all_styles\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {discardComments: {removeAll: true}},
      canPrint: true
    })
    , new UglifyJSPlugin()
    , new CompressionPlugin({
      asset: "[path].gz[query]"
      , algorithm: "gzip"
      , test: /\.(js|css|html|svg)$/
      , threshold: 10240
      , minRatio: 0.8
    })
    , new BrotliPlugin({
      asset: '[path].br[query]'
      , test: /\.(js|css|html|svg)$/
      , threshold: 10240
      , minRatio: 0.8
    })
    , new webpack.optimize.CommonsChunkPlugin({
      name: 'commons'
      , filename: "[name].[chunkhash].js"
      , chunkFilename: "[chunkhash].js"
      , minChunks: 2
    })
    , new WebpackCleanupPlugin({
      exclude: ["shared_styles.css", "gmap-resources/**/*.css"
        , "*.cur", "canvasPolyfill*", "gmap-resources/**/*", "images/**/*"]
    })
  ]
}


