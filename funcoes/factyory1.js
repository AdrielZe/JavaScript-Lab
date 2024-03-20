//Função factory = é uma função que retorna um objeto

//Factory simples

function criarPessoa(nome,sobrenome){
    return{
        nome: nome,
        sobrenome: sobrenome
    }
}

console.log(criarPessoa('Gabriel','Guedes'));