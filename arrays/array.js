console.log(typeof Array, typeof new Array); //function, object, object 

let aprovados = ['Bia','Carlos','Ana']

aprovados[9] = 'Rafael' // Eu posso adicionar um elemento em um índice mais alto do array, e todos os elementos entre
//esse índice e índice do último elemento ficarão como undefined

//demonstração:

console.log(aprovados.length)
console.log(aprovados)
aprovados.push('Rodrigo')
console.log(aprovados)


//Sort - Organiza o array em ordem alfabética - numérica

aprovados.sort() // Ordena o array em ordem alfabética
console.log(aprovados);

delete aprovados[1] //Deleta o elemento de índice 1, mas não ordena o array
console.log(aprovados[1]); // fica undefined, pq deletei
aprovados.sort() //Re-organiza o array
console.log(aprovados);

//Splice - Adicionar elementos em um determinado índice, remover elementos , ou remover e adicionar ao mesmo tempo
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,1,'Elemento1','Elemento2') //splice(indice,quantos elementos quero excluir a partir daquele indice, elementos que quero adicionar no lugar dos que foram excluidos )
console.log(aprovados)