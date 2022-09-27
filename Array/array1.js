console.log(typeof Array, typeof new Array, typeof [])

const array = new Array("1", "2", "3", "4", "5")
const array2 = ["1", "2", "3", "4", "5"]
console.log(array)
console.log(array2)

array2.push("6")//adiciona o valor no último índice
console.log(array2.length)
array2[10] = "11" //por mais que tenha o array até o índice 6, vai adicionar esse valor no índice 10 e tudo que estiver entre o índice 6 e 10 ficará com o valor de undefined
console.log(array2) // [ '1', '2', '3', '4', '5', '6', <4 empty items>, '10' ]
console.log(array2[7] == undefined) //true
console.log(array2[7] == null) //true
array2.push("12")
console.log(array2.length)

let newArraySort = array2.sort((a, b) => a > b) //vai ordenar o array. Não precisa passar parâmetro para ordenar
console.log(`newArraySort: ${newArraySort}`)


delete array2[7] //vai excluir o elemento mas não vai diminuir o tamanho do array. Esse índice 7 vai ficar undefined
console.log(array2)

