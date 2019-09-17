const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
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
        .pipe(sass())
        .pipe(gulp.dest("dist"));

const img = () =>
    gulp.src("src/img/**")
        .pipe(gulp.dest("dist/img"));

const watch = () => {
    gulp.watch("src/**/*.pug", html);
    gulp.watch("src/**/*.scss", css);
};

module.exports = {
    default: gulp.parallel(html, css, img),
    html,
    css,
    watch,
};
