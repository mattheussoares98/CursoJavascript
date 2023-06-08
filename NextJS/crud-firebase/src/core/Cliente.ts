export default class Cliente {
    #id: string
    #nome: string
    #idade: number
    //"#" antes do atributo significa que ele é privado

    constructor(
        nome: string, idade: number, id: string = "",
    ) {
        this.#id = id
        this.#idade = idade
        this.#nome = nome
    }

    static vazio() {
        return new Cliente("", 0)
    }

    get id() {
        return this.#id
    }
    get nome() {
        return this.#nome
    }

    get idade() {
        return this.#idade
    }
}