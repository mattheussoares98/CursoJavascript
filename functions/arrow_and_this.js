//quando utiliza uma arrow function, não precisa tratar o this utilizando o bind ou armazenando em uma constanteF

function Speak() {
    this.age = 0


    setInterval(() => {
        this.age++
        console.log(this.age)
    }, 1000)

}

new Speak