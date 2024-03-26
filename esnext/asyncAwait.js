const http = require('http')

const getTurma = (letra, callBack) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve,object) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                } catch(e){
                    reject(e)
                }
            })
        })
    })
}

//Recurso do ES8
//Objetivo de simplificar o uso de promises...

let obterAlunos = async () => { // Sempre que usar await, tem que ter o Async
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA,turmaB,turmaC)
}//Retorna um objeto AsyncFunction

obterAlunos()
     .then(alunos => alunos.map(alunos => alunos.nome))
     .then(nomes => console.log(nomes))