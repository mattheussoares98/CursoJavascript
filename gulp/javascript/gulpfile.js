//para executar esse código abaixo no terminal, precisa ir até a pasta onde o
//arquivo está e digitar "npx gulp"

const { series, parallel } = require("gulp")
const gulp = require("gulp")
const concat = require("gulp-concat")
const uglify = require("gulp-uglify")
const babel = require("gulp-babel")

function transformacaoJs(callback) {
    return gulp.src("src/**/*.js")
        .pipe(babel({ //transforma o código em uma versão mais compatível possível com os browsers
            comments: false, //não copia arquivos de comentário
            presets: ["env"], //pega a versão mais atual do javascript
        }))
        .pipe(uglify()) //converte todo o código pra ser minificado
        .on("error", error => console.log(error))
        .pipe(
            concat("codigo.min.js") //o parâm serve pra dizer o nome que o arquivo vai ficar
        ) //pega todos arquivos que já foram compilados e utiliza o babel pra minificar (apagar todos caracteres desnecessários) ele
        .pipe(gulp.dest("build"))

    // return callback() //comentado porque se colocar o return no gulp.src, funciona igual essa linha de código
}

function teste(callBack) {
    console.log("teste")
    return callBack()
}

module.exports.default = series(parallel(transformacaoJs, teste))