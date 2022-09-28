//quando cria dessa forma, cria uma nova instância quando usa o require. Portanto, cria um novo objeto
//nessa forma, está criando um factory
module.exports = () => {
    return {
        value: 1,
        inc() {
            this.value++
        }
    }
}