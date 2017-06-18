'use strict'

var gulp = require('gulp')
var gutil = require('gulp-util')
var hub = require('gulp-hub')
var global_done_color = 'bgRed'

console.log('                                                           web server gulpfile.js')


hub([
  'node_modules/gmap-dragdrop-react/gulp-component-lint.js'  // gulp component-lint-once // gulp component-lint-repeat
  , 'node_modules/gmap-dragdrop-react/gulp-component-jsx.js' // gulp component-jsx-once  // gulp component-jsx-repeat
  , 'web-server/gulp-web-lint.js'                            // gulp web-lint-once       // gulp web-lint-repeat
])

gulp.task('default', function () {
  console.log(gutil.colors[global_done_color]('  gulp component-lint-once'))
  console.log(gutil.colors[global_done_color]('  gulp component-lint-repeat'))
  console.log(gutil.colors[global_done_color]('  gulp component-jsx-once'))
  console.log(gutil.colors[global_done_color]('  gulp component-jsx-repeat'))
  console.log(gutil.colors[global_done_color]('  gulp gulp web-lint-once'))
  console.log(gutil.colors[global_done_color]('  gulp gulp web-lint-repeat'))
})

