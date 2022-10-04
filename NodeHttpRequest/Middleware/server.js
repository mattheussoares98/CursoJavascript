const port = 3003

const express = require('express')
const app = express()
const database = require("./database")

app.get("/products", (req, res, next) => {
    res.send(database.getProducts()) //faz a conversão automaticamente pra JSON
    //o "send" é o que será enviado como resposta da aquisição
})

app.get("/products/:id", (req, res, next) => {
    res.send(database.getProduct(req.params.id)) //faz a conversão automaticamente pra JSON
    //o "send" é o que será enviado como resposta da aquisição
})

app.post("/products", (req, res, next) => {
    const product = database.addProduct({
        name: req.body.name,
        price: req.body.price,
    })

    res.send(product) //faz a conversão automaticamente pra JSON
    //o "send" é o que será enviado como resposta da aquisição
})

app.listen(port, () =>
    console.log(`Servidor executando na porta ${port}`))

