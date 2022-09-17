function SpeakWithThis() {
    this.age = 0

    setInterval(function () {
        this.age++
        console.log(this.age)
    }.bind(this), 1000)
    //esse "setInterval" é uma função que é executada fora da função "SpeakWithThis()". Por isso, o this não será encontrado quando o "setInterval" for chamado. Para resolver isso, precisa utilizar o bind. Assim, sempre que chamar a função "SpeakWithThis()", não ocorrerá erro pois referenciará ao this correto
    //quando utiliza uma arrow function, não precisa usar o bind nem tratar o this
}

new SpeakWithThis

function SpeakWithSelf() {
    //para não precisar usar o bind, basta armazenar o this em uma constante e substituir tudo que usaria o this, por essa constante
    const self = this
    self.age = 0

    setInterval(function () {
        self.age++
        console.log(self.age)
    }, 1000)
    //esse "setInterval" é uma função que é executada fora da função "SpeakWithThis()". Por isso, o this não será encontrado quando o "setInterval" for chamado. Para resolver isso, precisa utilizar o bind. Assim, sempre que chamar a função "SpeakWithThis()", não ocorrerá erro pois referenciará ao this correto
    //quando utiliza uma arrow function, não precisa usar o bind nem tratar o this
}

new SpeakWithSelf