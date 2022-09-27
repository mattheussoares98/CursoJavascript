const moduleA = require("./moduleA") //esses módulos possuem exportação, por isso vai funcionar a importação e os códigos abaixo. Precisa colocar o caminho relativo no parâmetro pra referenciar ao módulo que está importando
const moduleB = require("./moduleB") //esses módulos possuem exportação, por isso vai funcionar a importação e os códigos abaixo. Precisa colocar o caminho relativo no parâmetro pra referenciar ao módulo que está importando

console.log(moduleA)
console.log(moduleB)

console.log(moduleA.hello)
console.log(moduleA.seeYouLater)
console.log(moduleA.welcome)
console.log(moduleB.goodMornig)
console.log(moduleB.goodNight())