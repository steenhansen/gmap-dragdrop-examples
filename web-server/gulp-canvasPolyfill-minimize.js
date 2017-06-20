'use strict'

// gulp polyfill-minify-once

process.chdir(__dirname)

var gulp = require('gulp')
var uglify = require('gulp-uglify')
var pump = require('pump')
var rename = require("gulp-rename")
var del = require('del')
var gutil = require('gulp-util')
var brotli = require('gulp-brotli')
var gzip = require('gulp-gzip')

var start_text_color = 'bgRed'    
var stop_text_color = 'bgGreen'

var my_minify_files = [
  '../public/canvasPolyfill.js'
]

var my_ugly_files = [
  '../public/canvasPolyfill.min.js'
]

var MINIFY_text = '                                              mininfy'

gulp.task('POLYFILL_1', function () {
  console.log(gutil.colors[start_text_color](MINIFY_text))
   del(my_ugly_files, {"force": "true"})
})

gulp.task('POLYFILL_2', ['POLYFILL_1'], function () {
  gulp.src(my_minify_files)
          .pipe(uglify())
          .pipe(rename({ suffix: '.min' }))
          .pipe(gulp.dest('../public'))
})

gulp.task('POLYFILL_3', ['POLYFILL_2'], function () {
  setTimeout(function() {
  gulp.src(my_ugly_files)
          .pipe(gzip())
          .pipe(gulp.dest('../public'))
  }, 3000)
})

gulp.task('POLYFILL_4', ['POLYFILL_3'], function () {
  setTimeout(function() {
    gulp.src(my_ugly_files)
            .pipe(brotli.compress())
             .pipe(gulp.dest('../public'))
  }, 3000)
})


gulp.task('POLYFILL_5', ['POLYFILL_4'], function () {
  console.log(gutil.colors[stop_text_color](MINIFY_text))
})

gulp.task('polyfill-minify-once', ['POLYFILL_5'])                         // gulp polyfill-minify-once
