const schedule = require('node-schedule')

const task1 = schedule.scheduleJob('*/5 * 13 * * 1', function () { //De 5 em 5 segundos, às 13 horas, em qualquer minuto, numa segunda feira
    console.log('Executando task1!', new Date().getSeconds());
})

setTimeout(function() { //Funçao de parada da task1. nesse caso, a task dura 20 segundos ( 20.000 ms), e depois disso é cancelada com a msg no console
    task1.cancel()
    console.log("Cancelando task 1")
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)] //dias da semana, de 0 a 6, sendo 0 domingo e 6 sábado. aqui o range é de segunda(1) a sexta(5)
regra.hour = 13
regra.second = 30

const task2 = schedule.scheduleJob(regra, function() {
    console.log('Executando tarefa 2!', new Date().getSeconds());
})
