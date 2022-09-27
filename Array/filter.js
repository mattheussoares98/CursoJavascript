const notes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const approved = notes.filter(function (number, index, array) {
    return number >= 7
    //sempre vai retornar um bool e tudo que resultar em "true" vai ser retornado em um novo array
})

console.log(approved)


Array.prototype.filterPersonalized = function (callback) {
    let newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const eightMore = note => note >= 8
const newArray = notes.filterPersonalized(eightMore)
console.log(newArray)