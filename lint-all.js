'use strict'

// gulp lint-all

var gulp = require('gulp')

gulp.task('lint-all',
        gulp.series(
                'lint-component'
                , 'lint-web'
               ,  'lint-entry'
              ,  'lint-public'
                )
)
