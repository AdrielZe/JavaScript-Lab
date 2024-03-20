//Funções Call e Apply

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4580,
    desc: 0.15,
    getPreco
}

console.log(getPreco());

const notebook = {preco: 4580,desc: 0.15}

console.log(getPreco.call(notebook));
console.log(getPreco.apply(notebook));

//A diferença entre esses dois está nos parâmetros em que passamos na hora da chamada 
console.log(getPreco.call(notebook,0.16,"R$")); // Nesse, eu passo o nome da variável e os parâmetros logo em seguida, separado por vírgula
console.log(getPreco.apply(notebook,[0.12,"R$"])); //Nesse, eu passo o nome da variável e os parâmetros logo em seguida, dentro de um array