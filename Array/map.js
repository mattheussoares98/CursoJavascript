const numbers = [1, 2, 3, 4, 5]

let numbersWithMap = numbers.map(function (element, index, array) {
    return element * 2
}).map(function (element) {
    return `${element.toFixed(2)} R$`
})
//o map gera um novo array

console.log(numbers)
console.log(numbersWithMap)


const myNames = [
    { "name": "Mattheus", "price": 10 },
    { "name": "Soares", "price": 50 },
    { "name": "Barbosa", "price": 100 }
]

const priceNames = myNames.map(function (element) {
    return element.price
})

console.log(priceNames)