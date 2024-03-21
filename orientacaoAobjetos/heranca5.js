//String, array e object são funções, e tem um atributo chamado .prototype( __proto__ )

console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function() {
    return this.split('').reverse().join('') //Divide todas as letras e espaços (split('')) em um array, depois , reverte esse array
}//(.reverse(), e depois junta todos os caracteres do array (join(''), assim gerando a palavra invertida))

console.log("Adriel Silveira de Oliveira".reverse());

Array.prototype.first = function () {
    return this[0] // Acesso um array/string dentro de um metódo do prótipo a partir do this
}

console.log([1,2,3,4,5].first())