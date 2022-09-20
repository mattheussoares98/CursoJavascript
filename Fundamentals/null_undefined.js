let valor
console.log(valor) //undefined pq não possui valor. Ela nunca foi inicializada
// console.log(valor2) //como não foi declarado vai dar erro na execução
valor = null //não aponta pra algum lugar de memória. Não possui valor
console.log(valor)

const produto = {}
console.log(produto.nome)
console.log(produto)
produto.nome = undefined //utilize null ao invés de undefined
