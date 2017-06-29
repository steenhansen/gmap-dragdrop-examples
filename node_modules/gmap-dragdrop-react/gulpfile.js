'use strict'

var gulp = require('gulp')
var gutil = require('gulp-util')
var hub = require('gulp-hub')
var global_done_color = 'bgRed'

console.log('                                                           component gulpfile.js')

hub([
  './compile-component.js'  // gulp compile-component
  , './lint-component.js' // gulp lint-component
])

gulp.task('default', function (cb) {
  console.log(gutil.colors[global_done_color]('                      gulp lint-component'))
  console.log(gutil.colors[global_done_color]('                      gulp compile-component'))
  cb()
})

