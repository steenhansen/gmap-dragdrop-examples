'use strict'

// gulp web-lint-once
// gulp web-lint-repeat


process.chdir(__dirname)

var gulp = require('gulp')
var eslint = require('gulp-eslint')
var gutil = require('gulp-util')
var runSequence = require('run-sequence')

var global_done_color = 'bgRed'    //  bgBlack/bgRed/bgCyan/bgGreen
var local_text_color = 'bgGreen'

var my_lint_dirs = [
  '../webpack-entry/*.jsx'
  , '../web-server/*.js'
  , '../public/gmap-resources/**/*.js'
]

var lint_text = '                                              lint'

gulp.task('LINT_web_init', function (callback) {
  console.log(gutil.colors[local_text_color](lint_text))
  callback()
})

gulp.task('LINT_web_check', function () {
  return gulp.src(my_lint_dirs)
          .pipe(eslint())
          .pipe(eslint.format())
})

gulp.task('LINT_web_done', ['LINT_web_check'], function (callback) {
  console.log(gutil.colors[global_done_color](lint_text))
  callback()
})

gulp.task('LINT_web_start', function (callback) {
  return runSequence('LINT_web_init',
          'LINT_web_check',
          'LINT_web_done',
          callback)
})

gulp.task('LINT_web_watch', function () {
  gulp.watch(my_lint_dirs, ['LINT_web_start'])
})

gulp.task('web-lint-repeat', ['LINT_web_start', 'LINT_web_watch'])  // gulp web-lint-once
gulp.task('web-lint-once', ['LINT_web_start'])                         // gulp web-lint-repeat
