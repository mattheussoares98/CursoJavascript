const MyObject = { a: 1, b: 2, c: 3 }

console.log(JSON.stringify(MyObject)) //converte de objeto para JSON
console.log(JSON.parse('{"bool": true, "contains": null, "String": "String"}')) //convertendo JSON para Objeto
//o atributo do JSON sempre precisa estar entre aspas duplas