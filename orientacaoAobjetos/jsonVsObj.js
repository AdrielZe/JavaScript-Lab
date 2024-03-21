const obj = { a: 1, b: 2, c: 3, soma(){return a + b + c}} 
console.log(JSON.stringify(obj)); //JSON não armazena funções, pois é um formato textual

//console.log(JSON.parse("{a : 1, b: 2,c:3}")); <-- errado. fazer conforme o código abaixo.

console.log(JSON.parse('{"a" : 1, "b": 2,"c":3}')); //Abrir o objeto com aspas simples e deixar os nomes dos objetos com aspas duplas
console.log(JSON.parse('{"a" : 1, "b": 2,"c":3, "d": null, "e": [], "f": { "nome": "Adriel", "idade": 29} }'));