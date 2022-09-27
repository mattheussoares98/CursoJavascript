const numbers = [1, 2, 3, 4, 5]
const numbers2 = [6, 7, 8, 9, 10]
const numbers3 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const allNumbers = numbers.concat(numbers2, numbers3, 21, 22, '23', function teste() { })
//vai concatenando os valores passados como parâmetro
console.log(allNumbers)