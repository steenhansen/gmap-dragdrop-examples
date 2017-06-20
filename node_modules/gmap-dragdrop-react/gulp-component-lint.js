'use strict'

// gulp component-lint-once
// gulp component-lint-repeat

process.chdir(__dirname)

var gulp = require('gulp')
var eslint = require('gulp-eslint')
var gutil = require('gulp-util')
const debug = require('gulp-debug')

var start_text_color = 'bgRed'
var stop_text_color = 'bgGreen'

var my_lint_dirs = [
  './jsx/*.jsx'
  , './*.js'
]
var lint_text = '                                    component lint'

gulp.task('COMP_LINT_1', function () {
  console.log(gutil.colors[start_text_color](lint_text))
   gulp.src(my_lint_dirs)
          .pipe(eslint())
          .pipe(eslint.format())
          .pipe(debug({title: 'LINT_component_check:'}))
})

gulp.task('component-lint-once', ['COMP_LINT_1'], function () {
  console.log(gutil.colors[stop_text_color](lint_text))
})

gulp.task('component-lint-repeat', ['component-lint-once'], function () {
  gulp.watch(my_lint_dirs, ['component-lint-once'])
})

