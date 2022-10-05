//spread serve para adicionar um array dentro de outro

const lastName = ["Soares", "Barbosa"]
const allNames = ["Mattheus", ...lastName]
console.log(allNames)

const features = {age: 24, heigth: 1.84}
const myFeatures = {name: "Mattheus", ...features, weight: 78}
console.log(myFeatures)