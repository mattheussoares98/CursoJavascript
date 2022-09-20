//as duas formas estão criando variáveis
//dê prioridade para a forma "let"
var a = 3; //com var, é possível redeclarar a variável
let b = 3; //com let, não é possível redeclarar a variável
var a = 10;

console.log(a, b);

const c = 5;
// c = 15; //vai dar erro por causa dessa linha mas o VS não mostra que vai dar erro a não ser que execute o código

{
    {
        {
            let seraLet = "Será let?"
            var seraVar = "Será var?"
        }
    }
}
// console.log(seraLet)//vai dar erro
console.log(seraVar)

function teste() {
    var testeVar = 123
    var testeLet = 123
}
// console.log(testeVar)//ocorre erro porque tudo que é definido em uma função só fica disponível nessa mesma função
// console.log(testeLet)//ocorre erro porque tudo que é definido em uma função só fica disponível nessa mesma função

