'use strict'

// gulp lint-web

const debug = require('gulp-debug')
var gulp = require('gulp')
var eslint = require('gulp-eslint')
var gutil = require('gulp-util')
var start_text_color = 'bgRed'

var my_lint_dirs = [
   __dirname+'/compile-polyfill.js'
  ,__dirname+'/gmap-dragdrop-react-server.js'
  ,__dirname+'/gmaps-pages.js'
  ,__dirname+'/lint-web.js'
]

var lint_text = '                                          web lint'

gulp.task('lint-web', function (cb) {
  console.log(gutil.colors[start_text_color](lint_text))
   gulp.src(my_lint_dirs)
          .pipe(eslint())
          .pipe(eslint.format())
           .pipe(debug({title: 'lint_WEB_check:'}))
  cb()
})


