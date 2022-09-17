const pessoa = {
    nome: "Mattheus",
    idade: 24,
    documentos: {
        rg: 37722005,
        cpf: 39367504837,
    }
}

const {nome: n, idade} = pessoa //como se estivesse criando um get relacionado a chave da classe "pessoa"
// n = "Soares" //não é possível fazer uma atribuição
console.log(n)
console.log(idade)
console.log(pessoa)


const {documentos: {rg, cpf, habilitacao}} = pessoa //como se estivesse criando um get relacionado a chave da classe "pessoa"
console.log(rg)
console.log(cpf)
console.log(habilitacao) //como não existe na classe "pessoa", vai retornar "undefined"



const [a] = [10]
console.log(a)

const [n1, , n3, n4, , n6 = 10] = [1,2,3,4]
console.log(n1, n3, n4, n6)
