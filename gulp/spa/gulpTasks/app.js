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
        .pipe(sass().on("error", sass.logError)) //processa o arquivo pra gerar o css e se houver algum erro mostra no console
        .pipe(uglifycss({ "uglyComments": true })) //remove todos comentários
        .pipe(concat("app.min.css")) //concatena tudo no mesmo arquivo
        .pipe(gulp.dest("build/assets/css")) //salva o arquivo nesse destino
}

function appJS() {
    return gulp.src("src/assets/js/**/*.js")
        .pipe(babel({
            presets: ["env"], //pega a versão mais atual do javascript
        })) //transforma o código em uma versão mais compatível possível com os browsers
        .pipe(uglify()) //converte todo o código pra ser minificado
        .pipe(concat("app.min.js"))
        .pipe(gulp.dest("build/assets/js"))
}

function appIMG() {
    return gulp.src("src/assets/imgs/**/*.*")
    .pipe(gulp.dest("build/assets/imgs"))
}

gulp.task("appHTML", appHTML)
gulp.task("appCSS", appCSS)
gulp.task("appJS", appJS)
gulp.task("appIMG", appIMG)

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG,
}