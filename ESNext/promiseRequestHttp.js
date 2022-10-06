const http = require('http')

const getStudents = (letter) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    //possui 3 URLs bem parecidas que só mudam o parâmetro letter (A,B,C) para retornar dados
    //para não precisar ficar chamando uma callback após a outra, é possível fazer isso por um 
    //Promise. Ele vai fazer todas chamadas de forma simultânea
    return new Promise((resolve, reject) => {
        //o Promise é sempre um dado que só será retornado no futuro
        http.get(url, res => {
            let result = ""

            res.on("data", data => {
                result += data
            })

            res.on("end", () => {
                try {
                    resolve(JSON.parse(result))
                } catch(e){
                    reject(e)
                }
            })
        }) 
    })
}

let names = []

Promise.all(
    //executa todas funções de forma simultânea
    [
        getStudents("A"),
        getStudents("B"),
        getStudents("C"),
    ]
)
    .then(value => console.log(value))
    .catch(error => console.log(error))
