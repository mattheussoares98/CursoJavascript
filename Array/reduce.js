const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sumNumbers = numbers.reduce(function (previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue
}, 0) // esse segundo parâmetro é o valor inicial

console.log(sumNumbers)



Array.prototype.personalizedReduce = function(callback) {
    let acumulator = this[0]
    for (var i = 1; i < this.length; i++) {
        acumulator = callback(acumulator, this[i], i, this)
    }
    return acumulator
}

const sum = (total, value) => total + value
console.log(numbers.personalizedReduce(sum))