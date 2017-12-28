const gulp = require('gulp');
const scss = require('gulp-scss');
const cssnano = require('gulp-cssnano');
const browserSync = require('browser-sync').create();

gulp.task('scss', () => {
  return gulp.src('scss/style.scss')
    .pipe(scss())
    .pipe(cssnano())
    .pipe(gulp.dest('docs/css'))
    .pipe(browserSync.stream());
});

gulp.task('dev', ['scss'], () => {
  browserSync.init({
    server: './docs'
  });

  gulp.watch('scss/**/*.scss', ['scss']);
  gulp.watch('docs/**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['scss']);
