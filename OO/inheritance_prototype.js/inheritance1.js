//na herança, sempre vai procurar o atributo na cadeia de protótipos

Object.prototype //esse é o principal prototype. Se não encontrar o atributo em nenhum prototype, ele vai procurar por último nesse local

const ferrari = {
    model: "F40",
    maxSpeed: 350,
}

const peugeot = {
    model: "208",
    maxSpeed: 160,
}

//ferrari.__proto__ forma como acessa o prototype
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)