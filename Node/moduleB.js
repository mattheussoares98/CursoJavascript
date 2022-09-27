//em Node, cada arquivo é um módulo e pra usar determinado módulo em outro local do 
//sistema, pracisa exportar ele e importar no outro módulo

let a //não será exportado

module.exports = {
    //está exportando. Pra conseguir usar em outro arquivo, precisa importar utilizando o caminho relativo
    goodMornig: "Bom dia",
    goodNight() {
        return "Boa noite"
    }
}