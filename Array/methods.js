const pilots = ["Hamilton", "Massa", "Senna", "Verstappen"]
console.log(pilots)

pilots.pop() //remove o último elemento
console.log(pilots)

pilots.shift() //remove o primeiro elemento do array
console.log(pilots)

pilots.push("Verstappen") //adiciona no final do array
console.log(pilots)

pilots.unshift("Hamilton")
console.log(pilots)

const pilots1 = pilots.slice(2) //vai gerar um novo array a partir do índice passado como parâmetro
console.log(pilots1)

const pilots2 = pilots.slice(0, 1) //vai pegar a partir do primeiro parâmetro e não vai incluir o segundo parâmetro
console.log(pilots2)
