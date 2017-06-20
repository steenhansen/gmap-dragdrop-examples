'use strict'

// gulp component-jsx-once
// gulp component-jsx-repeat

process.chdir(__dirname)

var gulp = require('gulp')
var extname = require('gulp-extname')
var babel = require('gulp-babel')
var del = require('del')
var gutil = require('gulp-util')
var start_text_color = 'bgRed'
var stop_text_color = 'bgGreen'

var jsx_text = '                                     component jsx'

gulp.task('COMP_JSX_1', function () {
  console.log(gutil.colors[start_text_color](jsx_text))
  del(['./js/*.js',
    './es6/*.es6'
  ], {"force": "true"})
})

gulp.task('COMP_JSX_2', ['COMP_JSX_1'],function () {
   gulp.src('./jsx/*.jsx')
          .pipe(babel())
          .pipe(extname('.es6'))
          .pipe(gulp.dest('./es6'))
})

gulp.task('COMP_JSX_3', ['COMP_JSX_2'],function () {
   gulp.src('./es6/*.es6')
          .pipe(babel({presets: ['es2015', "stage-2"]}))
          .pipe(gulp.dest('./js'))
})

gulp.task('component-jsx-once', ['COMP_JSX_3'],function () {
  console.log(gutil.colors[stop_text_color](jsx_text))

})

gulp.task('component-jsx-repeat', ['component-jsx-once'], function () {
  gulp.watch('./jsx/*.jsx', ['component-jsx-once'])
})

