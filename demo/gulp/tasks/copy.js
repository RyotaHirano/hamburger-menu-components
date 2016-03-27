import gulp from 'gulp';
import { copy as conf } from '../conf';

gulp.task('copy:cssDir', () => {
  return gulp.src(conf.cssDir.src)
    .pipe(gulp.dest(conf.cssDir.dst));
});
gulp.task('copy:css', () => {
  return gulp.src(conf.css.src)
    .pipe(gulp.dest(conf.css.dst));
});

gulp.task('copy:build', () => {
  return gulp.src(conf.build.src)
    .pipe(gulp.dest(conf.build.dst));
});
