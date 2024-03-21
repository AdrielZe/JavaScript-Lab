//Filter - literalmente filtra os elementos de um array com base em uma condição
//Gera um novo array com as condições que retornarem true
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const produtosCaros = produtos.filter((p) => p.preco > 2000)//(produto) => condição booleana

console.log(produtosCaros);