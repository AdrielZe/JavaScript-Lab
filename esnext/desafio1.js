const fs = require('fs')
const path = require('path')
const caminho = path.join(__dirname,'dados.txt')

function pegarDados(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, (_,conteudo) => resolve(conteudo.toString()))
    })
}


pegarDados(caminho).then(conteudo => console.log(conteudo))