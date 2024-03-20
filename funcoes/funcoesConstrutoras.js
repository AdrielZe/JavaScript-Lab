//Uma função construtora, em JavaScript, é uma função que nós usariamos como uma classe em Java
function Carro(velocidadeMaxima = 200, delta = 5){ // <-- Entre parênteses, está o construtor ( que pode ser usado ou não), caso não seja usado, será atribuído o valor padrão
    //atributo privado
    let velocidadeAtual = 0

    //metodos publicos ( o método se torna público ao colocar o 'this.' na frente)
    this.acelerar = function () {
       velocidadeAtual + delta <= velocidadeMaxima ? velocidadeAtual += delta : velocidadeAtual = velocidadeMaxima
    }

    this.getVelocidadeAtual = () => velocidadeAtual;
}

const uno = new Carro //Instanciando novo objeto
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350,20)

ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());