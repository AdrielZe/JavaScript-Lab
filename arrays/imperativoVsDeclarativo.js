const alunos = [
    { nome: 'João', nota: 7.9},
    { nome: 'Maria', nota: 9.2}
]


//Imperativo - ( o que tem que ser feito? ) -  O algoritmo com detalhes passo a passo 
let total1 = 0 
for ( let i = 0; i < alunos.length; i++ ){
    total1 += alunos[i].nota
}
console.log( total1 / alunos.length )

//Declarativo - ( como tem que ser feito? ) Digo o que tem que ser feito e as coisas saõ feitas internamente (melhor prática)
const getNota = aluno => aluno.nota
const soma = (total,atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)