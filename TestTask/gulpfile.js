'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    less = require('gulp-less'),
    rigger = require('gulp-rigger'),
    eslint = require('gulp-eslint'),
    rimraf = require('rimraf'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var path = {
    build: {
        html: 'build/',
        js: 'build/scripts/',
        css: 'build/css/',
        img: 'build/images/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/index.html',
        js: 'src/scripts/main.js',
        style: 'src/content/styles/main.less',
        img: 'src/content/images/**/*.*',
        fonts: ['src/content/fonts/**/*.*', 'bower_components/font-awesome/fonts/*.*']
    },
    watch: {
        html: 'src/index.html',
        js: 'src/scripts/**/*.js',
        style: 'src/**/*.less',
        img: 'src/content/images/**/*.*',
        fonts: 'src/content/fonts/**/*.*'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: './build'
    }
};

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('eslint', function () {
    gulp.src(path.watch.js)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({ stream: true }));
});

gulp.task('js:build', ['eslint'], function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({ stream: true }));
});

gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(less())
        .pipe(prefixer())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({ stream: true }));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({ stream: true }));
});

gulp.task('fonts:build', function () {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
]);

gulp.task('watch', function () {
    watch([path.watch.html], function (event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function (event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function (event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function (event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function (event, cb) {
        gulp.start('fonts:build');
    });
});

gulp.task('default', ['build', 'webserver', 'watch']);