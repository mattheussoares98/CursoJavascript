const names = ["Mattheus", "Soares", "Barbosa"]

names.forEach(function (name, index) {
    console.log(`${index + 1}- ${name}`)
})

names.forEach(name => console.log(name))

Array.prototype.forEach2 = function () {
    for (let x = 0; x < this.length; x++) {
        console.log(`${x + 1}- ${this[x]}`)
    }
}

names.forEach2()