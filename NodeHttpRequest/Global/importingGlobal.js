require("./global") //como fez a importação do global, qualquer coisa que foi criada no modo global ficará pública nesse módulo

console.log(global.MyApp.saudation())
MyApp.name = "Agora possui outro nome"
console.log(global.MyApp.name)
