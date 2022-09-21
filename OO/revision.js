//como criar objetos
const myObject1 = {
    name: "myObject1",
    persons: [
        { name: "Mattheus", height: 1.84, weight: 80, },
        { name: "Soares", height: 1.84, weight: 80, },
    ],
    func: function () { },
    func2() { }
}
const myObject2 = new Object
const myObject3 = Object.create(null)

//como inserir dados
//POR MAIS QUE O OBJETO SEJA CONSTANTE, É POSSÍVEL ALTERAR OS VALORES DELES PORQUE O QUE É CONSTANTE NESSE CASO É O CAMINHO QUE ESTÁ APONTANDO. Como está mudando atributos e não a atribuição (trocando o objeto), não ocorre erro. Caso tente atribuir outro objeto pra um objeto do tipo const, vai dar erro
myObject1["persons"][0]["telephone"] = { house: 49635735, cellPhone: 11961235430 }
myObject2.name = "myObject2"
myObject3.name = "myObject3"

//como deletar dados
delete myObject3.name

console.log(myObject1)
console.log(myObject2)
console.log(myObject3)

