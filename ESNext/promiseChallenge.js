//o desafio consiste em fazer a leitura de algum arquivo e retornar ele em uma Pomise
const fs = require("fs")
const path = "C:/Users/Soares/OneDrive/Celta/Anotaçoes/Outros/Anotações.dart"

const readWithParameter = (filePath) => {
//retornar a promise em uma função é melhor pois pode chamar a mesma função
//várias vezes usando o then depois de cada chamada ou colocando todas funções
//dentro do Promise.All()
    return new Promise((resolve, reject) => {
        //o Promise é sempre um dado que só será retornado no futuro
        fs.readFile(filePath, "utf-8", (error, data) => {

            resolve(console.log(data))
            reject("Erro para efetuar a leitura!")
        })
    })
}

readWithParameter("C:/Users/Soares/OneDrive/Celta/Anotaçoes/BSPDV/Atualizar concentrador.txt")
    .then(readWithParameter("C:/Users/Soares/OneDrive/Celta/Anotaçoes/BSPDV/Atualizar PDV.txt"))
    .then(readWithParameter("C:/Users/Soares/OneDrive/Celta/Anotaçoes/BSPDV/Horários PDV.txt"))
    .then(console.log())
    .catch(console.log())
//Acima funciona da mesma forma que o código abaixo

// Promise.all(
//     [
//         readWithParameter("C:/Users/Soares/OneDrive/Celta/Anotaçoes/BSPDV/Atualizar concentrador.txt"),
//         readWithParameter("C:/Users/Soares/OneDrive/Celta/Anotaçoes/BSPDV/Atualizar PDV.txt"),
//         readWithParameter("C:/Users/Soares/OneDrive/Celta/Anotaçoes/BSPDV/Horários PDV.txt")
//     ])
//     .then(console.log())
//     .catch(console.log())