//em Node, cada arquivo é um módulo e pra usar determinado módulo em outro local do sistema, pracisa exportar ele e importar no outro módulo

//abaixo possui 3 formas de exportar os dados

this.hello = "ola" //dessa forma fica acessível em outro módulo
exports.welcome = "Bem vindo"
module.exports.seeYouLater = "Até logo"