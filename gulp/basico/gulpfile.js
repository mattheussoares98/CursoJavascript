const gulp = require("gulp")
const { series, parallel } = require("gulp")

const antes1 = callback => {
    console.log("Tarefa antes 1")
    return callback()
}
const antes2 = callback => {
    console.log("Tarefa antes 2")
    return callback()
}
const fim = callback => {
    console.log("Tarefa fim")
    return callback()
}

function copiar(callBack) {
    gulp.src(["pastaA/arquivo1.txt", "pastaA/arquivo2.txt"])
    // .pipe(transformacao1()) //faz transformações nos arquivos
    .pipe(gulp.dest("pastaB"))
    return callBack()
}

module.exports.default = series(
    parallel(copiar, antes1,), //executa paralelamente esses dois pra só depois executar o restante
    antes2,
    fim,
)