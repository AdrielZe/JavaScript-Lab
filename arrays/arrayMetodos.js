const pilotos = ['Vettel','Alonso','Raikkonen','Massa']

// MÉTODOS DE ARRAY:

// pop - Remove o último elemento do array
pilotos.pop()
console.log(pilotos)

// push - Adiciona um novo elemento na última posição do array
pilotos.push('Verstappen')
console.log(pilotos)

// shift - Remove o primeiro elemento do array
pilotos.shift()
console.log(pilotos)

// unshift - Adiciona um elemento na primeira posição ([0]) do array
pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

// remover
pilotos.splice(3,1)
console.log(pilotos)

// slice - retorna um NOVO array
const algunsPilotos1 = pilotos.slice(2) // Como parâmetro (slice(índice)), coloco a partir de qual índice eu quero criar o meu novo array, com base no atual
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)// Também, no segundo parâmetro, posso adicionar até qual item eu quero pegar para criar o novo array
console.log(algunsPilotos2) 
