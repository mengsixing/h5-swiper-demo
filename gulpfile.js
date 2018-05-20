var gulp = require('gulp');

gulp.task('default',['autoprefixer'], function () {
    console.log('编译完毕，开始监听变化...');
    gulp.watch('./styles/*.scss', ['autoprefixer']);
});

gulp.task('autoprefixer', function () {
    var postcss = require('gulp-postcss');
    var autoprefixer = require('autoprefixer');
    var sass = require('gulp-sass');
    return gulp.src('./styles/*.scss')
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('./styles'));
});
