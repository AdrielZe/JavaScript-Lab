//SEM promise... ( usando esquema de callback ) 
const http = require('http')

const getTurma = (letra, callBack) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callBack(JSON.parse(resultado)) // function(alunos) passada como base na getTurma
        })


    })
}

let nomes = []

getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    console.log(nomes)
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
    console.log(nomes)
    getTurma('C', alunos => {
        nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
    console.log(nomes)
    })
       })
    })
    


