const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concant = require('gulp-concat')
const cleanCss = require('gulp-clean-css')
const copy = require('gulp-copy')
const replace = require('gulp-replace');
const tsc = require('gulp-typescript');

gulp.task('scripts', ()=>{
    return gulp.src('src/scripts/**/*.ts')
    .pipe(tsc({
        noImplicitAny: true,
        target: 'es6',
        isolatedModules: true
    }))
    .pipe(replace(/\sfrom '(\.\/[^']+)'/g,'from "$1.js"'))
    .pipe(gulp.dest('dist/scripts'))
})

gulp.task('styles', ()=>{
    return gulp.src('src/styles/**/*.scss')
    .pipe(sass())
    .pipe(cleanCss())
    .pipe(concant('styles.min.css'))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('assets', ()=>{
    return gulp.src('src/assets/**/*')
    .pipe(copy('dist', {prefix : 1}))
});

gulp.task('html', ()=>{
    return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
});

gulp.task('default',gulp.series('styles','scripts', 'assets','html'));