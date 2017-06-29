'use strict'

var gulp = require('gulp')
var gutil = require('gulp-util')
var hub = require('gulp-hub')
var global_done_color = 'bgRed'

console.log('                                                           web server gulpfile.js')

hub([
  'node_modules/gmap-dragdrop-react/lint-component.js'      // gulp lint-component
  , 'node_modules/gmap-dragdrop-react/compile-component.js' // gulp compile-component
  , 'web-server/lint-web.js'                                // gulp lint-web
  , 'webpack-entry/lint-entry.js'                           // gulp lint-entry
  , 'lint-public.js'                                        // gulp lint-public
  , 'lint-all.js'                                           // gulp lint-all
  , 'web-server/compile-polyfill.js'                        // gulp compile-polyfill
])

gulp.task('default', function (cb) {
  console.log(gutil.colors[global_done_color]('  gulp lint-component'))
  console.log(gutil.colors[global_done_color]('  gulp compile-component'))
  console.log(gutil.colors[global_done_color]('  gulp lint-web'))
  console.log(gutil.colors[global_done_color]('  gulp lint-entry'))
  console.log(gutil.colors[global_done_color]('  gulp lint-public'))
  console.log(gutil.colors[global_done_color]('  gulp lint-all'))
  console.log(gutil.colors[global_done_color]('  gulp compile-polyfill'))
  cb()
})

