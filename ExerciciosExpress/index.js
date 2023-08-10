const express = require("express")
const app = express()

// app.use((req, res) => {
//     //qualquer requisição ou url que acessar vai receber essa resposta. Se usar http://localhost:3000/teste/x/1/32/teste2, vai retornar o que está na linha abaixo
//     res.send("Teste!")
// })
app.use("/teste", (req, res) => {
    //esse código abaixo só será executando quando acessar a url http://localhsot:3000/teste
    res.send("Teste informando a URL!")
    //se digitar uma URL que não existe, não vai mais retornar o padrão igual a função comentada acima
})

app.get("/testeGet", (req, res) => {
    //esse código abaixo só será executando quando acessar a url http://localhsot:3000/teste
    res.send("Aceita somente o método get! Se fizer uma requisição no postman com essa url informando o tipo OPTIONS, vai retornar todos métodos disponíveis")
    //se digitar uma URL que não existe, não vai mais retornar o padrão igual a função comentada acima
})

app.all("/all", (req, res) => {
    res.send("Funciona com todos métodos!")
})

app.listen(3000, () => {
    console.log("backend executando")
})