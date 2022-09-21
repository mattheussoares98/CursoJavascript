console.log(typeof Object)
console.log(typeof Array)
console.log(typeof String)
//os 3 são funções e toda função possui o prototype

String.prototype.reverse = function () {
    return this.split('').reverse().join("")
}

console.log("Invertendo essas letras".reverse())