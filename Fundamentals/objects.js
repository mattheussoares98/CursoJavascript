const prod1 = {} 
//acabou de criar um objeto vazio. Um objeto é igual um map. Por mais que seja
//um const, é possível alterar os seus valores object no js é uma coleção de
//chave e valor que possui o nome e valor
prod1.nomes = ["Mattheus"]
prod1.nomes.push("Soares") 
//adicionou "Soares" no array da chave nomes. Só foi possível adicionar porque a
//chave "nomes" possui um array como valor
prod1["Chave nova"] = "valor da chave nova" //evitar chaves com espaço

console.log(prod1.nomes)

console.log(prod1)

const prod2 = {
    nome: "Mattheus",
    preco: 79.99,
    array: {
        outroArray: {
            outroArrayKey: ["outroArrayValue"]
        }
    }
}

console.log(prod2)

const one = true
const two = true
const three = true
const array = { one, two, three }
const array2 = { one: one, two: two, three: three }
console.log(array)
console.log(array.one == array2.one)