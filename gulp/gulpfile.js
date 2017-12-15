
const gulp = require('gulp');
const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const less = require('gulp-less');

gulp.task('default',()=>{
    console.log('nihao');
    gulp.run('hint');
    gulp.run('scripts');
    gulp.run('sass');
    gulp.run('less');

});

// 语法检查
gulp.task('hint',()=>{
    gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});


// 文件整合与压缩
gulp.task('scripts',()=>{
    gulp.src('./js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass',()=>{
    gulp.src('./sass/*.sass')
        .pipe(sass())
        .pipe(rename('mytest.css'))
        .pipe(gulp.dest('./css'));
});

gulp.task('less',()=>{
    gulp.src('./less/*.txt')
        .pipe(less())
        .pipe(rename('mytest_less.css'))
        .pipe(gulp.dest('./css'));
});

