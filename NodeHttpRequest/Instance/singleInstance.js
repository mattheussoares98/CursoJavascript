//como está criando um objeto, a instância é única. Todos requires que fizerem referência à esse módulo, serão iguais, como se fosse um modo estático
module.exports = {
    value: 1,
    inc(){
        this.value++
    }
}