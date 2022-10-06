const teams = new Set()

teams.add("SP")
teams.add("Palmeiras")
teams.add("Santos")
teams.add("SP") //não aceita repetição

console.log(teams)

console.log(teams.has("SP"))
console.log(teams.size)
console.log(teams.delete("SP"))

const names = ["Mattheus", "Soares", "Barbosa", "Barbosa"]
const newSet = new Set(names)
console.log(newSet)