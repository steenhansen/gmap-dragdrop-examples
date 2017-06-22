'use strict'

// gulp lint-web-once
// gulp lint-web-repeat


process.chdir(__dirname)

var gulp = require('gulp')
var eslint = require('gulp-eslint')
var gutil = require('gulp-util')

var start_text_color = 'bgRed'
var stop_text_color = 'bgGreen'

var my_lint_dirs = [
  '../webpack-entry/*.jsx'
  , '../web-server/*.js'
  , '../public/gmap-resources/**/*.js'
]

var lint_text = '                                          web lint'


gulp.task('WEB_LINT_1', function () {
  console.log(gutil.colors[start_text_color](lint_text))
   gulp.src(my_lint_dirs)
          .pipe(eslint())
          .pipe(eslint.format())
})

gulp.task('lint-web-once', ['WEB_LINT_1'], function () {
  console.log(gutil.colors[stop_text_color](lint_text))
})

gulp.task('lint-web-repeat', ['lint-web-once'], function () {
  gulp.watch(my_lint_dirs, ['lint-web-once'])
})

