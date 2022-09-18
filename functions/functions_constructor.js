//as funções no javascript são parecidas com as classes de nas outras linguagens como dart e c#
function Car(maxSpeed = 200, delta = 5) {
    let atualSpeed = 0 //atributo privado

    this.accelerate = () => {
        //atributo público devido ao this
        if (atualSpeed + delta <= maxSpeed) {
            return atualSpeed += delta
        } else {
            atualSpeed = maxSpeed
        }
    }

    this.getAtualSpeed = () => console.log(atualSpeed)
}

const uninho = new Car //se não usar o "new", não funciona
uninho.accelerate()
uninho.accelerate()
uninho.accelerate()
uninho.accelerate()
uninho.getAtualSpeed()

const ferrari = new Car(350, 20) //se não usar o "new", não funciona
ferrari.accelerate()
ferrari.accelerate()
ferrari.accelerate()
ferrari.getAtualSpeed()