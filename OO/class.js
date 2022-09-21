class Release { //classe é uma forma diferente de escrever uma função
    constructor(name = "Genérico", value = 0) {
        this.name = name
        this.value = value
    }
}
console.log(typeof Release) //== function

class FinancialCicle {
    constructor(month, year) {
        this.month = month
        this.year = year
        this.releases = []
    }

    addReleases(...releases) { //pode receber vários dados e trata como se fosse um array
        releases.forEach(release => this.releases.push(release))
    }

    summary() {
        let consolidatedValue = 0
        this.releases.forEach(release => {
            consolidatedValue += release.value
        })
        return consolidatedValue
    }
}

console.log(new Release().value)

const salary = new Release("Salário", 45000)
const creditCard = new Release("Cartão de crédito", -25000)

let marchFinancialCicle = new FinancialCicle("March", "2022")
marchFinancialCicle.addReleases(salary, creditCard)
console.log(marchFinancialCicle)
console.log(marchFinancialCicle.summary())