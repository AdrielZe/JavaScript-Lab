//As funções em JavaScript têm comportamentos flexíveis e diferentes de algumas outras linguagens

//Criar função de forma literal
function fun1(){ }

//Armazenar uma função em uma variável
const fun2 = function () { }

//Armazenar uma função em um array
//Posso armazenar tanto a função de forma literal, tanto quanto a função armazenada em variável ( anônima )
//Também é possível criar a funçai direto na declaração do array
const array = [function (a ,b) {return a +b} , fun1 ,fun2]
console.log(array[0](2,3));

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return "Opa"}
console.log(obj.falar());

//Passar função como parâmetro para outra função
function run(fun){
    fun()
}

run(function () {console.log('Executando...');})

//Uma função pode retornar/conter uma outra função
function soma(a,b){
    return function(c){
        console.log(a + b + c);
    }
}

soma(2,3)(8)

