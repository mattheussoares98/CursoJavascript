let string1 = "string1"
let string2 = 'string2'

console.log(string1.charAt(0)) //retorna o primeiro índice da string
console.log(string1.charAt(7)) //retorna nada pq não vai encontrar o índice
console.log(string1.indexOf("r")) //retorna o índice do valor
console.log(string1.substring(1)) //retira todos índices anteriores para imprimir
console.log(string1.substring(0, 3)) //vai do índice 0 ao 2
console.log(string1.replace(1, 'a')) //vai ficar "stringa"
console.log(string1.replace("s", "S")) //resultado = String
console.log("Mattheus, Soares, Barbosa".split(",")) //vai gerar um array separando os valores a cada parâmetro passado
console.log(string1.toUpperCase())

console.log("teste".concat(" concatenando").concat("!"))
console.log("Concatenando" + " de outra forma")
console.log(`Pode quebrar a linha
e concatenar ${string1}!`)
console.log(`1 + 1 = ${1 + 1}`)

let nome = ""
console.log(nome || "Desconhecido") //vai imprimir "Desconhecido" porque não há valor para o "nome". A expressão || nesse caso imprime um ou outro
nome = "Mattheus"
console.log(nome || "Soares") //vai imprimir "Mattheus" porque agora "nome" possui um valor
