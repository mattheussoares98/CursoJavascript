const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")

const chinaEmployees = value => value.pais == "China"
const femaleEmployees = value => value.genero == "F"
const smallerSalary = function (employee, atualEmployee) {
    return employee.salario < atualEmployee.salario ? employee : atualEmployee
}
axios.get(url).then(result => {
    const employees = result.data
    let chinaFemaleSmallerSalary = employees
        .filter(chinaEmployees)
        .filter(femaleEmployees)
        .reduce(smallerSalary)

    console.log(chinaFemaleSmallerSalary)

    // let chinaFemaleSmallerSalary = chinaAndFemale[0]
    // for (let x in chinaAndFemale) {
    //     if (chinaAndFemale[x].salario < chinaFemaleSmallerSalary.salario) {
    //         chinaFemaleSmallerSalary = chinaAndFemale[x]
    //     }
    // }
    // console.log(chinaFemaleSmallerSalary)
})