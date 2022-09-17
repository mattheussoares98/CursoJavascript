function sumWithoutParams() {
    //mesmo quando a função não recebe algo como parâmetro, é possível passar parâmetro pra essa função. É possível identificar se passou um parâmetro conforme a seguir
    let soma = 0
    for (let i in arguments) {
        soma += arguments[i]
    }
    console.log(soma)
}

sumWithoutParams()
sumWithoutParams(1, 2, 3)
sumWithoutParams(10, 20)
sumWithoutParams(10, 20, " teste")
