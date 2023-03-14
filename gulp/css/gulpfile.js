// Sass stands for Syntactically Awesome Stylesheet
// Sass is an extension to CSS
// Sass is a CSS pre-processor
// Sass is completely compatible with all versions of CSS
// Sass reduces repetition of CSS and therefore saves time

const {series, parallel} = require("gulp")
const gulp = require("gulp")
const sass = require('gulp-sass')(require('sass'));
const uglifycss = require("gulp-uglifycss")
const concat = require("gulp-concat")

function transformacaoCSS(){
    return gulp.src("src/sass/index.scss")
    .pipe(sass().on("error", sass.logError)) //converte pra sass e se tiver um erro já o trata
    .pipe(uglifycss({"uglifyComments": true})) //minifica o arquivo que será gerado. É muito importante fazer isso porque da uma diferença absurda no tamanho do arquivo
    .pipe(concat("estilo.min.css")) //é o mesmo nome do href no head do arquivo gulp/css/src/index.html
    .pipe(gulp.dest("build/css"))
}

function copiar(callBack) {
    gulp.src(["src/index.html"])
    // .pipe(transformacao1()) //faz transformações nos arquivos
    .pipe(gulp.dest("build"))
    return callBack()
}

module.exports.default = series(parallel(transformacaoCSS, copiar))