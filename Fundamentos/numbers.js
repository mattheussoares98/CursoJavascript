const peso1 = 1.0
const peso2 = Number("2.0185484135115")
console.log(peso1, peso2)

console.log("peso 1 é inteiro? " + Number.isInteger(peso1))

console.log(peso2.toFixed(2))
console.log(peso2.toString(2)) //converte para binário
console.log(typeof peso2);

///OPERAÇÕES "ESTRANHAS
console.log(7 / 0) //resulta em um tipo "infinito"
console.log("10" / 2) //ele consegue pegar o valor que está na string e dividir como se fosse um número ao invés de string
console.log("3" + 2) //resulta em "32" porque concatena, pois o sinal de "+" faz sentido na concatenação e no caso acima, "/" não faz
console.log(0.7 + 0.1) //resulta em 0.79999...
console.log((10).toFixed(2))


const raio = 5;
const area = Math.PI * Math.pow(raio, 2); //raio² = 25
console.log(Math.PI.toString() + "* 5² = " + area)
console.log(typeof Math) //object

let random = Math.random(); //retorna um valor de 0 à 1
let randomFloor = Math.floor(random) //arredonda pra baixo
let randomCei = Math.ceil(random) //arredonda pra cima