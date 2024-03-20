function criarProduto(produto,preco){
       return{
        produto,
        preco,
        desconto: 0.10
       }
}

console.log(criarProduto("Café","R$12.00"));
