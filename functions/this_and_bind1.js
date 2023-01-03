const personWithThis = {
    saudation: "Bom dia",
    speak() {
        console.log(this.saudation)
    }
}

personWithThis.speak()
const speak = personWithThis.speak
speak() 
//não está chamando a partir do contexto do "personWithThis", por isso o this é
//diferente nesse contexto //undefined porque o this já não está mais
//referenciando ao mesmo this do objeto "personWithThis"

const speakWithBind = personWithThis.speak.bind(personWithThis) 
//o bind resolve a questão do this. Basta passar como parâmetro onde está o this
//que será referenciado. Nesse caso, o this está no "personWithThis" e por isso
//ele foi passado como parâmetro quando utiliza uma arrow function, não precisa
//tratar o this que está dentro da função
speakWithBind()

const personWithoutThis = {
    saudation: "Bom dia",
    speak(){
        console.log(saudation)
    }
}
// personWithThis.speak() //vai dar erro porque não possui o this no console.log
// e por isso não vai encontrar o saudation
