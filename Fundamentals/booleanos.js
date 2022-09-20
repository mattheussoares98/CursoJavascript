let isActive = false
console.log("isActive = " + isActive)

isActive = true;
console.log("isActive = " + isActive)

isActive = 1
console.log("isActive) = " + isActive) //retorna o valor atual "1"

//casos que a dupla negação retorna verdadeiro
console.log("!!1 = " + !!1)
console.log("!!'teste' = " + !!"teste")
console.log("!!{} = " + !!{})
console.log("!!Infinity = " + !!Infinity)

//casos que a dupla negação retorna falso
console.log("!!0 = " + !!0)
console.log("!!'' = " + !!"")
console.log("!!null = " + !!null)
console.log("!!NaN) = " + !!NaN) //NotANumber
console.log("!!undefined = " + !!undefined)