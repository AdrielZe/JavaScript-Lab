console.log(typeof Object) // function
console.log(typeof new Object); // Como se fosse um construtor

const Cliente = function(){};
console.log(typeof Cliente);
console.log(typeof new Cliente);

//Criação de classe
class Produto{
    nome;
    descricao;

  setNome(nome){
  this.nome = nome;
 }

} //ES 2015(ES06)
console.log(typeof Produto); //Uma classe seria uma forma diferente de escrever uma função
console.log(typeof new Produto());

//Em JavaScript, os objetos são criados a partir
//de funções.


