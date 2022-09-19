function getPrice(discount = 0.1, coin = "R$") {
    console.log(`O produto "${this.name}" possui o preço de ${this.price}${coin}. Com o desconto de ${discount}, o preço final fica em ${this.price * (1 - discount)}`)
}

globalThis.name = "Whisky" //só funcionou porque colocou o "globalThis". Se fosse só o "this", retornaria "undefined" para esses dois parâmetros
globalThis.price = 160 //só funcionou porque colocou o "globalThis". Se fosse só o "this", retornaria "undefined" para esses dois parâmetros
getPrice()

const productTest = {
    name: "Product One",
    price: 200,
    getPrice
}

getPrice.apply(productTest)
getPrice.call(productTest)
getPrice.apply(productTest, [0.5, "$"]) //o primeiro parâmetro é sempre o contexto. o "apply" e "call" funcionam igual, só muda a forma como os parâmetros são passados
getPrice.call(productTest, 0.5, "R$") //o primeiro parâmetro é sempre o contexto. o "apply" e "call" funcionam igual, só muda a forma como os parâmetros são passados
