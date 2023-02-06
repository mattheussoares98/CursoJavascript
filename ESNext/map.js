const myMap = new Map()
myMap.set("angular", { framework: false }) //adiciona um elemento com a chave específica e se já houver um elemento com essa chave, o atualiza
myMap.set("react", { framework: true }) //adiciona um elemento com a chave específica e se já houver um elemento com essa chave, o atualiza
myMap.set("key", "value") //adiciona um elemento com a chave específica e se já houver um elemento com essa chave, o atualiza



const filterKey = myMap.get("key") //filtra a chave e retorna o valor da chave
console.log("filterKey: ", filterKey)

console.log("angular: ", myMap.get("angular"))
console.log("react: ", myMap.get("react"))

console.log()

const varKeys = new Map([
    [function () { }, "Function"],
    [{}, "Object"],
    [123, "number"]
])

varKeys.forEach((key, value) => {
    console.log("key: ", key, "\nvalue: ", value)
});

console.log(varKeys.has(123))
varKeys.delete(123)
console.log(varKeys.has(123))

varKeys.set(123, "a") //vai adicionar novamente a chave 123
varKeys.set(123, "b") //vai alterar o valor para "b"
console.log("123: ", varKeys.get(123))
