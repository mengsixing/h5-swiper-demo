var gulp = require('gulp');

gulp.task('default',['autoprefixer','copyDir'], function () {
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

gulp.task('copyDir', function () {
    return gulp.src(['./images/*','./audios/*','./styles/*.css','./scripts/*','index.html'],{base: '.'})
        .pipe(gulp.dest('./dist'));
});
