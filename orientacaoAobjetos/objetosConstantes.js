// pessoa -> 123 -> {...}

const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa);

//pessoa -> 456 -> {...} 
// pessoa = {nome: 'Ana}

Object.freeze(pessoa) // Não deixa que ocorra mais nenhuma alteração no objeto

pessoa.nome = 'Maria' //Essa alteração não surtirá efeito, por conta do freeze. Portanto o console.log abaixo terá 'Pedro' como output
console.log(pessoa.nome);