// 引入gulp和组件
var gulp        = require('gulp');                          // 引入gulp
var concat      = require('gulp-concat');                   // 文件合并
var uglify      = require('gulp-uglify');                   // js压缩
var jshint      = require('gulp-jshint');                   // js语法检查
var less        = require('gulp-less');                     // less编译
var cssnano     = require('gulp-cssnano');                  // css压缩
var csslint     = require('gulp-csslint');                  // css规范检测
var rename      = require('gulp-rename');                   // 文件更名

// Less编译、css压缩、css规范检测[任务]
gulp.task('less', function() {
    return gulp.src(['./src/less/h5ui.less','./src/less/example.less']) // 编译目标文件(less)
        .pipe(less()) // less编译
        .pipe(cssnano()) // css压缩
        .pipe(csslint()) // css规范检测
        // .pipe(rename({suffix: '.min'})) // 文件更名(*.min)
        .pipe(gulp.dest('./dist/css')); // 输出文件存放目录
});


// 监听文件[任务]
gulp.task('watch', function() {
    gulp.watch('./src/less/**/*.less', ['less']);
});


// 默认执行任务
gulp.task('default', ['scripts', 'less', 'watch']);
