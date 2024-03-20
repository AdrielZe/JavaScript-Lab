//Em uma função tradicional em JavaScript, definida como function() = { }, o this pode variar.
//Já com uma Arrow Function , () => (codigo aqui), o this não varia

//This e a função Bind
const pessoa = {
    saudacao: 'Bom dia!',
    falar(){   //Podemos declarar um "metodo" assim.
        console.log(this.saudacao)
    }
}

pessoa.falar();
const falar = pessoa.falar;
falar()// Conflito entre paradigmas, como a função não está atrelada a nenhum objeto, gerará undefined como resposta.

const falarDePessoa = pessoa.falar.bind(pessoa) // O método bind faz uma ligação entre a variável declarada e o this.saudacao do objeto, assim, a resposta gerada não
//será undefined e terá como base o "falar" de pessoa.
falarDePessoa();