const product = {
    name: "produto",
    price: 10,
    discount: 0
}

const fs = require('fs') //"fs" é o módulo de escrita/leitura que já vem no node

fs.writeFile(__dirname + "/fileName.json", JSON.stringify(product), error => {
    console.log(error)
})

//__dirname == uma constante que está presente em todos módulos do node que
//representa o diretório atual