///FUNÇÕES SEM RETORNO
function printSumOfNumbers(a, b) {
    console.log(a + b)
}

printSumOfNumbers(2, 3)
printSumOfNumbers(2) //vai retornar NaN (NotANumber) porque o valor de "b" não foi definido
printSumOfNumbers(2, 3, 4, 5, 6, 7) //funciona... ele leva em consideração apenas os dois primeiros valores e ignora os outros

//FUNÇÕES COM RETORNO
function sum(a, b = 0) { //passando como valor padrão
    return a + b
}

console.log(sum(2, 3))
console.log(sum(2)) //retorna "2" porque o valor padrão de b é zero
console.log(sum())


//ARMAZENANDO O VALOR DA FUNÇÃO EM UMA VARIÁVEL
const printSum = function (a, b) {
    console.log(a + b)
}

printSum(10, 10)


//ARMAZENANDO UMA FUNÇÃO ARROW EM UMA VARIÁVEL
const soma = (a = 0, b = 0) => a + b
console.log(soma(2, 3))

const subtracao = (a = 0, b = 0) => { return a - b }
console.log(subtracao(10, 1))

const print2 = a => console.log(a) //como é só um parâmetro, não precisa colocar entre parênteses
print2(2)

const result = note => note >= 7 ? "Aprovado" : "Reprovado";
console.log(result(6))
console.log(result(7))
