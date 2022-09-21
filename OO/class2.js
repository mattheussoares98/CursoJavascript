class Grandfather {
    constructor(lastName) {
        this.lastName = lastName
    }
}

class Father extends Grandfather { //o extends significa que está recebendo o "Grandfather" igual ao prototype. Vai herdar o que possui nessa classe
    constructor(lastName, profession = "Desenvolvedor de sistemas") {
        super(lastName) //chama o construtor da classe pai
        this.profession = profession
    }
}

class Child extends Father {
    constructor(){
        super("Soares") //vai alterar o sobrenome do GrandFather pra "Soares" também
    }
}

const child = new Child
console.log(child)