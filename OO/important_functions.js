const person = {
    age: 24,
    name: "Mattheus",
    weight: 80,
}

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

Object.entries(person).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
})

Object.entries(person).forEach(([key, value]) => {
    console.log(key, ": ", value)
})

Object.defineProperty(person, 'birth', {
    //está criando um novo atributo pro objeto "person"
    //abaixo está definindo as propriedades
    enumarable: true, //permite acessar através do "person.birth"
    writable: false, //permite alterar o valor
    value: "31/03/1998", //valor inicial
})

person.birth = "01/01/2022" //não vai alterar o valor
console.log(person.birth)

const dest = { a: 1 }
const objct1 = { b: 2 }
const objct2 = { c: 3, a: 4 }
const obj = Object.assign(dest, objct1, objct2) //o primeiro objeto receberá os dados dos objetos seguintes. Quando o primeiro objeto receber algum atributo com o mesmo nome vindo de algum objeto seguinte, será subscrito o valor do atributo

console.log(dest)