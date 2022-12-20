//promise é algo que é executado depois de determinado período

function speakLater(seconds) {
    return new Promise((resolve, reject) => {
        //colocou esse setTimeOut pra simular algo assíncrono
        resolve() //caso dê certo, pode retornar o que será feito na funçao resolve
        setTimeout(() => {
            reject() //o reject é a função que será chamada quando der erro
        }, seconds * 1000) //multiplicou pq esse tempo é em milisegundos
    })
}

speakLater(2)
    .then(value => console.log("resolve")) //executa o resolve
    .then(value => console.log(value)) //executa o resolve. //ESSE VALUE É O QUE RECEBE DE PARÂMETRO NO "resolve"
    .catch(console.log("Reject"))//executa o reject


function promiseWithParameters(message) {
    return new Promise((succes, error) => {
        succes(message)
        error(message)
    })
}

promiseWithParameters("Mensagem vinda de parâmetro")
.then(value => console.log(value))
