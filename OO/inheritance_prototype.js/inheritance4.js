const father = { name: "Mattheus", hairColor: "Preto" }

const child = Object.create(father) //o parâmetro é o prototype. Então nesse caso o "child" vai herdar o que for de father

const child2 = Object.create(father, {
    name: { value: "Soares", enumerable: true, writable: false }
})

console.log(child.name, child.hairColor)
child2.name = "Barbosa" //não deixa alterar por causa da propriedade "writable"
console.log(child2.name)
console.log(child2.hairColor)
