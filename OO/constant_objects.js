const myObject = {
    product: "Whisky",
    price: 100,
    test: "test",
    func: () => console.log("x"),
}

myObject.product = "White horse"
Object.freeze(myObject) //quando coloca o objeto dentro dessa função, não é mais possível alterar o objeto
myObject.price = 200 //não é possível alterar porque o objeto está congelado

console.log(myObject)