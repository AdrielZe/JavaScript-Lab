//Funções que podem ser úteis quando falamos sobre objetos.

//Obj de exemplo:

const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

//Funções de exemplo:
console.log(Object.keys(pessoa)); //Retorna todas as chaves dos atributos
console.log(Object.values(pessoa)) //Retorna todos os valores dos atributos
console.log(Object.entries(pessoa)) // Retorna todos os pares de chave:valor dos atributos, dentro de arrays

Object.entries(pessoa).forEach( ([chave,valor]) => {
    console.log(`${chave}:${valor}`);
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true, //aparece no object.keys?
    writable: false, // pode ser modificada?
    value:'01/01/2019'
}); // Define uma propriedade de algum objeto

pessoa.dataNascimento = '01/01/2012' // A data não será alterada pois o writable está como false, e ela não pode ser modificada
console.log(pessoa.dataNascimento); // o output será 01/01/2019, que foi a data que setamos como fixa no object.defineproperty

//Object.assign
const objetoDeDestino = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(objetoDeDestino, o1, o2)// <-- O primeiro elemento é o objeto de destino, e os parâmetros que vêm depois dele
//serão concatenados no objeto de destino. Se houver uma variável com o mesmo nome, ela será reescrita pela que colocamos depois.
console.log(obj);