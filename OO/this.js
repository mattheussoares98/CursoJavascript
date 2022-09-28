console.log("fora da função... ")
console.log("this === global: ", this === global) //false
console.log("this === module: ", this === module) //false
console.log("this === module.exports: ", this === module.exports) //true
console.log("this === exports: ", this === exports) //true

function logThis(){
    console.log("\ndentro da função...")
    console.log("this === exports: ", this === exports) //false
    console.log("this === module.exports: ", this === module.exports) //false
    console.log("this === global: ", this === global) //true

    this.attention = "...." //está apontando pro global
}

const arrowFunction = () => {
    console.log("\ndentro de uma arrow function....")
    console.log("this === global: ", this === global)//false
    console.log("this === exports: ", this === exports) //true
    console.log("this === module.exports: ", this === module.exports) //true
}

logThis()
arrowFunction()