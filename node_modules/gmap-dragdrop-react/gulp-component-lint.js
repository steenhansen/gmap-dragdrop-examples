'use strict'

// gulp component-lint-once
// gulp component-lint-repeat

process.chdir(__dirname)

var gulp = require('gulp')
var eslint = require('gulp-eslint')
var gutil = require('gulp-util')
var runSequence = require('run-sequence')
const debug = require('gulp-debug')

var global_done_color = 'bgRed'
var local_text_color = 'bgCyan'

var my_lint_dirs = [
  './jsx/*.jsx'
  , './*.js'
]

var lint_text = '                                              lint'

gulp.task('LINT_component_init', function (callback) {
  console.log(gutil.colors[local_text_color](lint_text))
  callback()
})

gulp.task('LINT_component_check', function () {
  return gulp.src(my_lint_dirs)
          .pipe(eslint())
          .pipe(eslint.format())
          .pipe(debug({title: 'LINT_component_check:'}))
})

gulp.task('LINT_component_done', ['LINT_component_check'], function (callback) {
  console.log(gutil.colors[global_done_color](lint_text))
  callback()
})
gulp.task('LINT_component_start', function (callback) {
  return runSequence('LINT_component_init',
          'LINT_component_check',
          'LINT_component_done',
          callback)
})

gulp.task('LINT_component_watch', function () {
  gulp.watch(my_lint_dirs, ['LINT_component_start'])
})

gulp.task('component-lint-repeat', ['LINT_component_start', 'LINT_component_watch'])  // gulp component-lint-repeat
gulp.task('component-lint-once', ['LINT_component_start'])                         // gulp component-lint-once