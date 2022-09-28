const fs = require("fs") //"fs" é o módulo que já vem no node
//__dirname == uma constante que está presente em todos módulos do node que representa o diretório atual
const path = __dirname + "/file.json"

// leitura sincrona => não é bom usar dessa forma porque o sistema vai ficar esperando
//terminar a leitura pra continuar com a execução do código e se a leitura demorar, pode 
//vai ficar muito tempo executando a leitura

const contents = fs.readFileSync(path, "utf-8")
console.log("leitura assíncrona => ", contents)


//leitura assíncrona => utilize dessa forma abaixo pois é melhor
//quando terminar a leitura do arquivo, vai executar a callback que está no terceiro parâmetro
fs.readFile(path, "utf-8", (error, data) => {
    console.log("\nleitura sincrona => ", data)
})

//outra forma de ler um arquivo JSON
const jsonData = require("./file.json")
console.log("\nLeitura do Json sem usar o 'fs' do node => ", jsonData)

fs.readdir(__dirname, (error, data) => {
    console.log("\nLendo arquivos da pasta => ", data)
})