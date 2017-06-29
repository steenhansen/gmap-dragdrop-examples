'use strict'

// gulp compile-component

var gulp = require('gulp')
var extname = require('gulp-extname')
var babel = require('gulp-babel')
var del = require('del')
var gutil = require('gulp-util')
var start_text_color = 'bgRed'

var jsx_text = '                                     component jsx'

gulp.task('COMP_JSX_1', function () {
  console.log(gutil.colors[start_text_color](jsx_text))
  return del([ __dirname + '/js/*.js',
    __dirname + '/es6/*.es6'
  ], {"force": "true"})
})

gulp.task('COMP_JSX_2', function () {
  return gulp.src(__dirname + '/jsx/*.jsx')
          .pipe(babel())
          .pipe(extname('.es6'))
          .pipe(gulp.dest(__dirname +'/es6'))
})

gulp.task('COMP_JSX_3', function () {
  return gulp.src(__dirname +'/es6/*.es6')
          .pipe(babel({presets: ['es2015', "stage-2"]}))
          .pipe(gulp.dest(__dirname +'/js'))
})

gulp.task('compile-component',
        gulp.series('COMP_JSX_1', 'COMP_JSX_2', 'COMP_JSX_3' )
) 
                  
