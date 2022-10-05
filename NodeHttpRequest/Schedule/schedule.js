//comando para instalar o node-schedule:
//"npm install node-schedule"
//o ideal é navegar até a pasta que deseja instalar e executar o comando

const schedule = require('node-schedule')

const task1 = schedule.scheduleJob("*/5 * * * * *", function () {
    //o primeiro parâmetro é de quanto em quanto tempo vai ser executado
    //nesse caso é de 5 em 5 segundos
    console.log("Executando a primeira tarefa no segundo: ", new Date().getSeconds())
})

setTimeout( function (){
    task1.cancel()
    console.log("Cancelando a primeira tarefa")
}, 20000) //o segundo parâmetro define depois de quanto tempo será executada a função

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(1,5)] //executa de segunda à sexta
// rule.hour = 12 //hora que será executado
rule.second = 10

const task2 = schedule.scheduleJob(rule, function(){
    console.log("Executando a segunda tarefa: ", new Date().getSeconds())
})

setTimeout( function (){
    task2.cancel()
    console.log("Cancelando a segunda tarefa")
}, 70000) //o segundo parâmetro define depois de quanto tempo será executada a função
