var gulp = require('gulp');
var serve = require('serve');

gulp.task('default',['autoprefixer','copyDir'], function () {
    console.log('编译完毕，开始监听变化...');
    gulp.watch(['./styles/*.scss'], ['autoprefixer','copyDir']);
    gulp.watch(['index.html','./scripts/*.js'], ['copyDir']);
    const server = serve(__dirname+'/dist', {
        port: 8088,
        ignore: ['node_modules']
      });
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
    return gulp.src(['./styles/*.css','./scripts/index.js','index.html'])
        .pipe(gulp.dest('./dist'));
});
