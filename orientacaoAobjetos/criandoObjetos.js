// usando a notação literal
const obj1 = {}
console.log(obj1);

//Object em JS 
const obj2 = new Object
console.log(obj2);

//Funções construtoras
function Produto(nome,preco,desc){ //Ao colocar direto esses atributos como parâmetro, eu torno eles privados (private do java)
    this.nome = nome

    this.getPrecoComDesconto = () => {
        return preco * (1-desc)
    }

    this.getPreco = () => { //getter
        return preco
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
console.log(p1.preco); // n disponivel pq n usei getter
console.log(p1.getPreco()); // disponivel pois usei getter
console.log(p1.getPrecoComDesconto()); // disponivel pois usei getter

//Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980,4)
const f2 = criarFuncionario('Maria', 11400,1)
console.log(f1.getSalario(),f2.getSalario());

//Object.create
const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha);

//Uma funçao famosa que retorna um objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON);