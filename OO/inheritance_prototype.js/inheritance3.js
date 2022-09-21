
const car = {
    atualSpeed: 0,
    maxSpeed: 200,
    accelerate(delta) {
        if (delta == undefined) {
            delta = 10
        }
        if (this.atualSpeed += delta <= this.maxSpeed) {
            this.atualSpeed -= 1
            //não sei porque mas está vindo com a velocidade = 1
            this.atualSpeed += delta
        } else {
            this.atualSpeed = this.maxSpeed
        }
    },
    status() {
        return `está à ${this.atualSpeed}km/h de ${this.maxSpeed}km/h`
    }
}

const ferrari = {
    model: "F40",
    maxSpeed: 300,
    status() {
        return `O modelo ${this.model}: ${super.status()}`
        //se não colocar com o super, vai ficar chamando o método infinitamente
    },
}


const peugeot = {
    model: "208",
    maxSpeed: 160,
    status() {
        return `O modelo ${this.model}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, car) //primeiro o objeto e depois o prototype
Object.setPrototypeOf(peugeot, car) //primeiro o objeto e depois o prototype
ferrari.accelerate(30)
peugeot.accelerate(200)
console.log(ferrari.status())
console.log(peugeot.status())