'use strict'

// gulp compile-polyfill

process.chdir(__dirname)

var gulp = require('gulp')
var uglify = require('gulp-uglify')
var rename = require("gulp-rename")
var del = require('del')
var gutil = require('gulp-util')
var gzip = require('gulp-gzip')
const rev = require('gulp-rev')

var concat = require('gulp-concat')

var start_text_color = 'bgRed'

var MINIFY_text = '                                              mininfy'

gulp.task('POLYFILL_1', function () {
  console.log(gutil.colors[start_text_color](MINIFY_text))
  return del('../public/my_polyfills-*', {"force": "true"})
})

gulp.task('POLYFILL_2', function() {
  return gulp.src('./*Polyfill.js')
          .pipe(concat('../public/my_polyfills.js'))
          .pipe(rev())
          .pipe(gulp.dest('../public'))
})
gulp.task('POLYFILL_3', function () {
  return gulp.src('../public/my_polyfills*.js')
          .pipe(uglify())
          .pipe(rename({suffix: '.min'}))
          .pipe(gulp.dest('../public'))
})

gulp.task('POLYFILL_4', function () {
  return gulp.src('../public/my_polyfills*.min.js')
          .pipe(gzip())
          .pipe(rename(function (path) {
            path.basename = path.basename.replace("min.", "");
          }))
          .pipe(gulp.dest('../public'))
})


gulp.task('POLYFILL_5', function () {
  console.log(gutil.colors[start_text_color](MINIFY_text))
  return del('../public*/my_polyfills*.min.js', {"force": "true"})
})

gulp.task('compile-polyfill',
        gulp.series('POLYFILL_1', 'POLYFILL_2', 'POLYFILL_3', 'POLYFILL_4', 'POLYFILL_5' )
)
                  
