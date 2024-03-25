// tagged template - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes,valores);
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`);