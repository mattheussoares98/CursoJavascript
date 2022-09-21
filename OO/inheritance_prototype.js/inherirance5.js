function MyObject() { }
//toda função possui o parâmetro de prototype
console.log(MyObject.prototype)

const myObject1 = new MyObject
const myObject2 = new MyObject

console.log(myObject1.__proto__ == myObject2.__proto__)
console.log(MyObject.prototype == myObject1.__proto__)

MyObject.prototype.name = "Meu nome recebido via prototype"
MyObject.prototype.speak = function () { return this.name }

console.log(myObject1.speak()) //como a função foi criada via prototype, fica disponível pros dois Objetos
console.log(myObject2.speak()) //como a função foi criada via prototype, fica disponível pros dois Objetos

const object3 = {}
object3.__proto__ = MyObject.prototype
console.log(object3.speak())