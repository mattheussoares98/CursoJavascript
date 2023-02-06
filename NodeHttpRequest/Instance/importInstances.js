//quando cria da forma que foi criada, referencia uma única instância. Por isso quando chama as 
//funções de incremento pra objetos diferentes, altera o mesmo valor porque é como se fosse estático
const singleInstanceA = require("./singleInstance")
const singleInstanceB = require("./singleInstance")
singleInstanceA.inc()
singleInstanceB.inc()
//como a instância é única, o método de incremento será usado no mesmo valor do "./singleInstance"
console.log(`singleInstanceA.value: ${singleInstanceA.value}`)


const newInstanceA = require("./newInstance")() //quando o module.exports tem uma função como 
//objeto, está criando do modo factory. Pra invocar a função, precisa adicionar "()" depois do "require"
const newInstanceB = require("./newInstance")() //quando o module.exports tem uma função como 
//objeto, está criando do modo factory. Pra invocar a função, precisa adicionar "()" depois do "require"
newInstanceA.inc()
newInstanceA.inc()
newInstanceB.inc()
//são instâncias diferentes, por isso não altera o valor do newInstanceB também
console.log(`newInstanceB.value: ${newInstanceB.value}`)
console.log(`newInstanceA.value: ${newInstanceA.value}`)