'use strict'

// gulp lint-entry

const debug = require('gulp-debug')
var gulp = require('gulp')
var eslint = require('gulp-eslint')
var gutil = require('gulp-util')
var start_text_color = 'bgRed'

var my_lint_dirs = [
  __dirname+'/*.jsx'
]

var lint_text = '                                          web lint'

gulp.task('lint-entry', function (cb) {
  console.log(gutil.colors[start_text_color](lint_text))
   gulp.src(my_lint_dirs)
          .pipe(eslint())
          .pipe(eslint.format())
           .pipe(debug({title: 'lint_ENTRY_check:'}))
  cb()
})


