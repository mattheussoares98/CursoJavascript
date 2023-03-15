const gulp = require("gulp")
const babel = require("gulp-babel")
const uglify = require("gulp-uglify")
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require("gulp-uglifycss")
const concat = require("gulp-concat")
const htmlmin = require("gulp-htmlmin")

function appHTML() {
    return gulp.src("src/**/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("build"))
}

function appCSS() {
    return gulp.src("src/assets/sass/index.scss")
    .pipe(sass().on("error", sass.logError)) //converte pra sass e se tiver um erro já o trata
    .pipe(uglifycss({"uglifyComments" : true})) //remove todos comentários
    .pipe(concat("app.min.css")) //concatena tudo no mesmo arquivo
    .pipe(gulp.dest("build/assets/css")) //salva o arquivo nesse destino
}

function appJS() {
    return 
}

function appIMG() {
    return 
}


module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG,
}