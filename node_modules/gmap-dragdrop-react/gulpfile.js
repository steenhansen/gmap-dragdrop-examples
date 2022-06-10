

// gulp default

const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () =>
  gulp.src('jsx/*.jsx')
    .pipe(babel({
      presets: ['@babel/preset-env', '@babel/preset-react']
    }))
    .pipe(gulp.dest('js'))
);




