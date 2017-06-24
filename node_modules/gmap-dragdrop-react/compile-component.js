'use strict'

// gulp compile-component-once
// gulp compile-component-repeat

process.chdir(__dirname)

var gulp = require('gulp')
var extname = require('gulp-extname')
var babel = require('gulp-babel')
var del = require('del')
var gutil = require('gulp-util')
var runSequence = require('run-sequence')
var start_text_color = 'bgRed'
var stop_text_color = 'bgGreen'

var jsx_text = '                                     component jsx'

gulp.task('COMP_JSX_1', function () {
  console.log(gutil.colors[start_text_color](jsx_text))
  return del(['./js/*.js',
    './es6/*.es6'
  ], {"force": "true"})
})

gulp.task('COMP_JSX_2', function () {
  return gulp.src('./jsx/*.jsx')
          .pipe(babel())
          .pipe(extname('.es6'))
          .pipe(gulp.dest('./es6'))
})

gulp.task('COMP_JSX_3', function () {
  return gulp.src('./es6/*.es6')
          .pipe(babel({presets: ['es2015', "stage-2"]}))
          .pipe(gulp.dest('./js'))
})

gulp.task('COMP_JSX_4', function () {
  runSequence('COMP_JSX_1'  // Setting ['dependancy'] does not keep order.
          , 'COMP_JSX_2'  // Using setTimeOuts does not keep order.
          , 'COMP_JSX_3')  // runSequence keeps order on Windows.
})

gulp.task('compile-component-once', ['COMP_JSX_4'], function () {
  console.log(gutil.colors[stop_text_color](jsx_text))
})

gulp.task('compile-component-repeat', ['compile-component-once'], function () {
  gulp.watch('./jsx/*.jsx', ['compile-component-once'])
})

