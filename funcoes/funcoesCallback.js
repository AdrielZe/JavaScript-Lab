//Callback: Passar uma função para outra funçao, e quando determinado evento acontecer, a função 
//passada vai ser disparda e chamada de volta


const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`); //Função usada no callback do forEach loop
}

fabricantes.forEach(imprimir);

fabricantes.forEach((elemento,b) => { //Podem ser passados dois parâmetros para o forEach, o primeiro será o nome do elemento no array,
    console.log(elemento,b)           //e o segundo será o índice
})