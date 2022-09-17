const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //retorna "undefined" porque não existe o índice 4

valores[4] = 4;
valores[10] = 10;
console.log(valores[4], valores[10])
console.log(valores.length) //são 5 elementos mas como eu adicionei um valor ao índice 10, retornou que possui 11 elementos

valores.push({id: 3}, false, null, "string") //não é possível especificar o tipo do array, por isso é possível misturar dados na mesma lista
console.log(valores)

console.log(valores.pop()) //apaga o último índice do array e o retorna
delete valores[2] //apaga o índice informado
console.log(typeof valores)
