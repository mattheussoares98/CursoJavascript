const gulp = require("gulp")
const webserver = require("gulp-webserver")
const watch = require("gulp-watch")

function servidor() {
    return gulp.src("build")
        .pipe(webserver({
            port: 8181,
            open: true, //abrir o navegador
            livereload: true,
            directoryListing: true,
        }))
}

function monitorarArquivos(cb) {
    //quando fizer alguma alteração no html já vai atualizar a informação na página
    watch("src/**/*.html", //arquivos que serão analisados
        () => gulp.series("appHTML")() //quando houver alteração na task appHTML já executa ela
    )
    watch("src/**/*.scss", //arquivos que serão analisados
        () => gulp.series("appCSS")() //quando houver alteração na task appHTML já executa ela
    )
    watch("src/**/*.js", //arquivos que serão analisados
        () => gulp.series("appJS")() //quando houver alteração na task appHTML já executa ela
    )
    watch("src/assets/imgs/**/*.*", //arquivos que serão analisados
        () => gulp.series("appIMG")() //quando houver alteração na task appHTML já executa ela
    )
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor,
}