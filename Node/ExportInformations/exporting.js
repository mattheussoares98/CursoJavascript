this.a = 1 //também faz referência para o "module.exports"
exports.b = 2 //o export é sempre uma referência para o "module.exports"
module.exports.c = 3 //o ideal é sempre usar dessa forma, principalmente quando for fazer uma atribuição de um novo objeto

exports = {
    //não vai fazer alteração no "module.exports" porque o "exports" é uma referência ao "module.exports"
    //por isso, só é possível fazer alterações no "module.exports" através do "exports" se adicionar um atributo
    //se fizer uma atribuição de um novo objeto, não vai acontecer nada
    test: 0,
}
