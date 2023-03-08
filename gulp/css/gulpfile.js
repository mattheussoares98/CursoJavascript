// Sass stands for Syntactically Awesome Stylesheet
// Sass is an extension to CSS
// Sass is a CSS pre-processor
// Sass is completely compatible with all versions of CSS
// Sass reduces repetition of CSS and therefore saves time

const {series} = require("gulp")
const gulp = require("gulp")
const sass = require("gulp-sass")
const uglifycss = require("gulp-uglifycss")
const concat = require("gulp-concat")

function transformacaoCSS(){
    return gulp.src("src/saac/index.css")
    .pipe(sass().on("error", sass.logError())) //converte pra sass e se tiver um erro já o trata
    .pipe(uglifycss({"uglifyComments": true}))
    .pipe(concat("estile.min.css"))
}