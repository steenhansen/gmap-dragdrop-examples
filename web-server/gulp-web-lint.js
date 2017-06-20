'use strict'

// gulp web-lint-once
// gulp web-lint-repeat


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

gulp.task('web-lint-once', ['WEB_LINT_1'], function () {
  console.log(gutil.colors[stop_text_color](lint_text))
})

gulp.task('web-lint-repeat', ['web-lint-once'], function () {
  gulp.watch(my_lint_dirs, ['web-lint-once'])
})

