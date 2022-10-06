//ao invés de retornar os índices, ele retorna os valores
let completeName = ["Mattheus", "Soares", "Barbosa"]

for (let name of completeName) {
    console.log(name)
}

let keysAndValues = new Map([
    ["Map", {learned: true}],
    ["Set", {learned: true}],
    ["Promises", {learned: false}],
])
for(let [key, value] of keysAndValues){
    console.log(key, value)
}

for(let value of completeName.values()){
    console.log(value)
}

for(let key of completeName.keys()){
    console.log(key)
}