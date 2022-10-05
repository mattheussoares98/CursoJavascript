//      ESSAS ANOTAÇÕES ABAIXO SÃO IMPORTANTES
///para instalar as dependências precisa ir no cmd até a pasta que deseja instalar e depois executar o comando
///instale o nodemon pelo terminal usando o comando "npm i --save-dev nodemon"
///para executar o servidor, digite "npm start" no terminal
///cada vez que salvar o arquivo, ele vai reiniciar o servidor
///para dar certo o modo de post, precisa instalar uma dependência com o seguinte código: "npm i --save body-parser@1.18.2 -E"

const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require("./database")
app.use(bodyParser.urlencoded({
    extended: true
    //ele faz um parser do que é recebido em uma requisição post para receber os dados corretamente
    //no exemplo do postman, precisa enviar os parâmetros através do body da requisição
}));

app.get("/products", (req, res, next) => {
    res.send(database.getProducts()) //faz a conversão automaticamente pra JSON
    //o "send" é o que será enviado como resposta da aquisição
})

app.get("/products/:id", (req, res, next) => {
    res.send(
        database.getProduct(req.params.id),
    ) //faz a conversão automaticamente pra JSON
    //o "send" é o que será enviado como resposta da aquisição
})

app.post("/products", (req, res, next) => {
    const product = database.addProduct({
        name: req.body.name, //body é o que está vindo na requisiçãoo do post
        price: req.body.price, //body é o que está vindo na requisiçãoo do post
    })

    res.send(product) //faz a conversão automaticamente pra JSON
    //o "send" é o que será enviado como resposta da aquisição
})

app.put("/products/:id", (req, res, next) => { //http://localhost:3003/products/1
    const product = database.addProduct({
        id: req.params.id, //significa que é um parâmetro da requisição. Por isso a URL precisa ser a seguinte: http://ip:porta/coleção que vai alterar/ID
        name: req.body.name, //body é o que está vindo na requisiçãoo do put
        price: req.body.price, //body é o que está vindo na requisiçãoo do put
        //logicamente, precisa enviar esses parâmetros "req.body" pelo body da requisição
    })

    res.send(product) //faz a conversão automaticamente pra JSON
    //o "send" é o que será enviado como resposta da aquisição
})

app.delete("/products/:id", (req, res, next) => { //http://localhost:3003/products/1
    const product = database.deleteProduct(req.params.id)

    res.send(product) //faz a conversão automaticamente pra JSON
    //o "send" é o que será enviado como resposta da aquisição
})

app.listen(port, () =>
    console.log(`Servidor executando na porta ${port}`))

