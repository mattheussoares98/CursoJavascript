Object.prototype.attribute0 = "0"
const grandfather = { attribute1: "1" }
const father = {
    __proto__: grandfather, //forma de atribuir o prototype
    attribute2: "2"
}
const child = {
    __proto__: father, //forma de atribuir o prototype
    attribute3: "3"
}

console.log(father.__proto__)
console.log(
    child.attribute1, //não vai encontrar no prototype do pai. Como o pai tem o protoype do avô, ele vai encontrar no avô
    child.attribute2, //vai encontrar porque possui o atributo no prototype do "father"
    child.attribute3,
)
console.log(child.attribute0) //procurou o atributo no "child", "father", "grandfather" e finalmente no Object.protoype, respectivamente nessa ordem
