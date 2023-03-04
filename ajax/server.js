const bodyParser = require("body-parser") //faz o parse do body da requisição
const express = require("express")
const app = express()

app.use(express.static(".")) //pega todos arquivos estáticos que estão na pasta do ajax. Se não fizer isso, o servidor não consegue pegar as informações que serão utilizadas pra montar a página
app.use(bodyParser.urlencoded({ extended: true })) //tudo que vier de formulário vai user isso
app.use(bodyParser.json()) //se vier um json no body da requisição, isso que vai ser usado pra transformar em um objeto

const multer = require("multer") //interpretar o formulário que vier o arquivo do upload

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./upload")
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single("arquivo") //o param do "single" é o nome do arquivo que vai vir

app.post("/upload", (req, res) => {
    upload(req, res, err => {
        if(err){
            return res.end("Ocorreu um erro")
        }

        res.end("Concluído com sucesso")
    })
})

app.post("/formulario", (req, res) => {
    res.send({
        ...req.body,
        id: 1,
    })
})

app.get("/teste", (req, res) => res.send("ok")) //quando mandar uma requisição do tipo GET com "/teste" no final, vai retornar "ok"
app.listen(8080, () => console.log("Servidor iniciado"))
