//para executar esse código abaixo no terminal, precisa ir até a pasta onde o
//arquivo está e digitar "npx gulp"
const { series } = require("gulp")
const gulp = require("gulp")
const ts = require("gulp-typescript")
const tsProject = ts.createProject("tsconfig.json") //arquivo de configuração que o compilador do typescript vai utilizar

function transformacaoTS() {

    return tsProject.src()
        .pipe(tsProject()) //faz todo processo de compilação
        .pipe(gulp.dest("build")) //se não houver a pasta ele cria
}

module.exports.default = series(transformacaoTS)

