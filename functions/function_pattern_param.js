function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(
    soma1(),
    soma1(3),
    soma1(1, 2, 3),
    //teste
    soma1(0, 0, 0), //como nesse caso "0 == false", vai receber o valor padrão que é 1
)



function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 //verifica se possui o segundo índice dos parâmetros da função, que no caso é o parâmetro "b" da função
    c = isNaN(c) ? 1 : c //se o parâmetro "c" não for um número, vai atribuir o valor padrão
    return a + b + c
}

console.log(
    soma2(),
    soma2(3),
    soma2(1, 2, 3),
    soma2(0, 0, 0),
)


function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(
    soma3()
)