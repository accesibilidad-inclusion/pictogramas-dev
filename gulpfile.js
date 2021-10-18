const gulp = require('gulp');
const svgo = require('gulp-svgo');
 
gulp.task('pictos', () => {
 
    return gulp.src('src/*')
        .pipe(svgo())
        .pipe(gulp.dest('dist/'));
});