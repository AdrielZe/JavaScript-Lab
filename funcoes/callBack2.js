const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Criar um novo array somente com as notas mais baixas.

//SEM CALLBACK:
let notasBaixas= [];
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

//COM CALLBACK, UTILIZANDO O FILTER. ( O FILTER PODE SUBSTITUIR O IF EM VÁRIOS CASOS QUE QUEREMOS EXTRAIR INFORMAÇÕES DE 
// ARRAYS COM CERTAS CONDIÇÕES)

notasBaixas = notas.filter(nota => nota < 7)


console.log(notasBaixas);