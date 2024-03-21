//concat --> é utilizado para realizar a concatenação de arrays. não altera o array original, apenas cria novos arrays


const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']

const todos = filhas.concat(filhos)
console.log(todos,filhas,filhos);

console.log([].concat([1,2], [3, 4], 5, [[6,7]]));