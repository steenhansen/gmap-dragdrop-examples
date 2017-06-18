'use strict'

// gulp component-jsx-once
// gulp component-jsx-repeat

process.chdir(__dirname)

var gulp = require('gulp')
var runSequence = require('run-sequence')
var extname = require('gulp-extname')
var babel = require('gulp-babel')
var del = require('del')
var gutil = require('gulp-util')
var global_done_color = 'bgRed'
var local_text_color = 'bgBlack'

var jsx_text = '                                               jsx'

gulp.task('JSX_component_init', function () {
  console.log(gutil.colors[local_text_color](jsx_text))
  return del([
    './js/*.js',
    './es6/*.es6'
  ], {"force": "true"})
})

gulp.task('JSX_component_jsx_to_es6', function () {
  return gulp.src('./jsx/*.jsx')
          .pipe(babel())
          .pipe(extname('.es6'))
          .pipe(gulp.dest('./es6'))
})

gulp.task('JSX_component_es6_to_js', function () {
  return gulp.src('./es6/*.es6')
          .pipe(babel({presets: ['es2015', "stage-2"]}))
          .pipe(gulp.dest('./js'))
})

gulp.task('JSX_component_done', function (callback) {
  console.log(gutil.colors[global_done_color](jsx_text))
  callback()
})

gulp.task('JSX_component_start', function (callback) {
  return runSequence('JSX_component_init'
          , 'JSX_component_jsx_to_es6'
          , 'JSX_component_es6_to_js'
          , 'JSX_component_done'
          , callback)
})

gulp.task('JSX_component_watch', function () {
  gulp.watch('./jsx/*.jsx', ['JSX_component_start'])
})

gulp.task('component-jsx-repeat', ['JSX_component_start', 'JSX_component_watch']) // gulp component-jsx-repeat
gulp.task('component-jsx-once', ['JSX_component_start'])                      // gulp component-jsx-once
