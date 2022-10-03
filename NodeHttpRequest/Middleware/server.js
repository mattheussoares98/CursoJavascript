const port = 3003

const express = require('express')
const app = express()

app.get("/products", (req, res, next) => {
    res.send({name: "Products", price: 10}) //faz a conversão automaticamente pra JSON
})

app.listen(port, () => console.log(`Servidor executando na porta ${port}`))
