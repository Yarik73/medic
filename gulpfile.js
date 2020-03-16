const {src, watch, series, dest, parallel} = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const csso = require('gulp-csso');
const concat = require('gulp-concat');
const rename = require("gulp-rename");
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');


function connectTask() {
    connect.server({
        root: 'dist',
        livereload: true
    });
}

function htmlTask() {
    return src('./src/html/*.html')
        .pipe(plumber())
        .pipe(dest('./dist'))
        .pipe(connect.reload());
}

function cssTask() {
    return src('./src/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(csso())
        .pipe(dest('./dist/css'))
        .pipe(connect.reload());
}

function jsTask() {
    return src([
        './src/js/jquery-3.4.1.min.js',
        './src/js/select2.min.js',
        './src/js/owl.carousel.min.js',
        './src/js/script.js',
    ])
        .pipe(plumber())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(dest('./dist/js'))
        .pipe(connect.reload());
}

function imgTask() {
    return src('./src/img/*.{jpg,png,svg,gif}')
        .pipe(imagemin())
        .pipe(dest('./dist/img'))
        .pipe(connect.reload());
}

function fontTask() {
    return src('./src/fonts/*.{ttf,woff,woff2,svg,otf,eot}')
        .pipe(plumber())
        .pipe(dest('./dist/fonts'))
        .pipe(connect.reload());
}

function watchTask() {
    watch('./src/html/*.html', series(htmlTask));
    watch('./src/scss/**/*.scss', series(cssTask));
    watch('./src/js/*.js', series(jsTask));
    watch('./src/img/**', series(imgTask));
    watch('./src/fonts/**', series(fontTask));
}

exports.default = parallel(connectTask, htmlTask, cssTask, imgTask, fontTask, jsTask, watchTask);
