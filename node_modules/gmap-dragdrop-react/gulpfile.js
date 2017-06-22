'use strict'

var gulp = require('gulp')
var gutil = require('gulp-util')
var hub = require('gulp-hub')
var global_done_color = 'bgRed'

console.log('                                                           component gulpfile.js')

hub([
  './compile-component.js'  // gulp compile-component-once // gulp compile-component-repeat
  , './lint-component.js' // gulp lint-component-once  // gulp lint-component-repeat
])

gulp.task('default', function () {
  console.log(gutil.colors[global_done_color]('                      gulp lint-component-once'))
  console.log(gutil.colors[global_done_color]('                      gulp lint-component-repeat'))
  console.log(gutil.colors[global_done_color]('                      gulp compile-component-once'))
  console.log(gutil.colors[global_done_color]('                      gulp compile-component-repeat'))
})

