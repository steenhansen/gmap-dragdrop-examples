'use strict'

var gulp = require('gulp')
var gutil = require('gulp-util')
var hub = require('gulp-hub')
var global_done_color = 'bgRed'

console.log('                                                           web server gulpfile.js')


hub([
  'node_modules/gmap-dragdrop-react/lint-component.js'      // gulp lint-component-once    // gulp lint-component-repeat
  , 'node_modules/gmap-dragdrop-react/compile-component.js' // gulp compile-component-once // gulp compile-component-repeat
  , 'web-server/lint-web.js'                                // gulp lint-web-once       // gulp lint-web-repeat
  , 'web-server/compile-polyfill.js'                        // gulp compile-polyfill
])

gulp.task('default', function () {
  console.log(gutil.colors[global_done_color]('  gulp lint-component-once '))
  console.log(gutil.colors[global_done_color]('  gulp lint-component-repeat'))
  console.log(gutil.colors[global_done_color]('  gulp compile-component-once'))
  console.log(gutil.colors[global_done_color]('  gulp compile-component-repeat'))
  console.log(gutil.colors[global_done_color]('  gulp lint-web-once'))
  console.log(gutil.colors[global_done_color]('  gulp lint-web-repeat'))
  console.log(gutil.colors[global_done_color]('  gulp compile-polyfill'))
})

