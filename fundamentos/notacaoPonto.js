console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = 'Bola'
obj1.cor = 'Azul'
obj1['forma'] = 'Circular'
// ou tbm obj1['nome'] = 'Bola'

console.log(obj1);

function Obj(nome) {
    this.nome = nome; //atributo publico
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}


const { nome,idade } = pessoa
console.log(nome,idade)

const {nome: n, idade:i} = pessoa
console.log(n, i);

const {sobrenome = "Oliveira", bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada) //Dados são 'undefined' por padrão no JavaScript
console.log(pessoa);
