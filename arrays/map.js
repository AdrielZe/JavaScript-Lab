// map -> faz uma transformação no array. Mapeia o array para outro do mesmo tamanho, só que com os dados transformados.
// ex : tenho um array com [1,2,3], e quero trasformar ele em outro array de 3 elementos, no qual cada um desses elementos seja
//o dobro dos elementos do array original

//REGRA . O map precisa gerar um novo array com o MESMO número de elementos do array original
// map pode receber 3 parâmetros = (o próprio valor atual/ o índice / o array completo)
const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e) { //Uma função que eu passar para um map sempre tem que RETORNAR alguma coisa, caso contrário, terei undefined como resultado
    return e*2
}) 

console.log(resultado)

const soma10 = e => e + 10

const triplo = e => e * 3

const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` //toFixed(2) adiciona 2 casas decimais. replace('.',',') substitui . por ,

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) //Posso usar map no map, pois o resultado do map é um array e sempre vai ser um array.
console.log(resultado);