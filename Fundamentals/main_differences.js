//a tipagem do javascript é FRACA!

//#########################################

// É possível passar mais parâmetros para uma função do que ela foi declarada
// que pode receber. Exp: função que recebe somente um parâmetro
function soma(a) {
    console.log(a)
    let acumulator = a
    for (let i of arguments) {
        //na definição da função recebe apenas um argumento, mas pode passar mais de um argumento para esse função e para obter esses próximos argumentos, basta usar os arguments
        acumulator += i
        console.log(acumulator)
    }
}
// é possível chamar ela passando mais de um parâmetro
soma(10, 10, 10, 10)

// como ela recebe somente um parâmetro, a partir do segundo parâmetro que foi passado quando chamou a função, será ignorado

//#########################################

// quando declara usando o "var", fica disponível em toda a classe, a não ser
// que tenha sido declarada dentro de uma função. Até quando é declarada dentro
// de uma função, fica disponível fora dessa função. Quando declara como let, só
// fica disponível no mesmo bloco de código. Por isso é mais aconselhável o seu
// uso

//#########################################

//um map é definido com uma variável usando o valor {}

//#########################################

//um array pode conter vários tipos de dados diferentes. int, double, string,
//etc

//#########################################

//mesmo quando um array é do tipo const, é possível adicionar novos valores pra
//ele
const funcs = []

funcs.push(10)
funcs[1] = 11

console.log(funcs)

//#########################################

//é possível chamar uma variável antes dela ser declarada. Se fizer isso, toda
//vez que chamar a variável antes da declaração dela, retornará "undefined"

console.log(a)
var a = 10
console.log(a)

//#########################################
