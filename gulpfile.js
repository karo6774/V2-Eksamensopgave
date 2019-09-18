const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const numeral = require("numeral");
require("numeral/locales/da-dk");

numeral.locale("da-dk");

const html = () =>
    gulp.src("src/index.pug")
        .pipe(pug({
            locals: {numeral}
        }))
        .pipe(gulp.dest("dist"));

const css = () =>
    gulp.src("src/index.scss")
        .pipe(sass({
            includePaths: ["node_modules"],
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest("dist"));

const img = () =>
    gulp.src("src/img/**")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"));

const font = () =>
    gulp.src("node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-*")
        .pipe(gulp.dest("dist/font"));

const watch = () => {
    gulp.watch("src/**/*.pug", html);
    gulp.watch("src/**/*.scss", css);
};

module.exports = {
    default: gulp.parallel(html, css, img, font),
    html,
    css,
    font,
    watch,
};
