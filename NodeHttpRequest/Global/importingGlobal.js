require("./global") //como fez a importação do global, qualquer coisa que foi criada no modo global ficará pública nesse módulo

console.log(global.MyApp.saudation())
console.log(`global.MyApp.name = ${global.MyApp.name}`)
MyApp.name = "Agora possui outro nome"
console.log(global.MyApp.name)
