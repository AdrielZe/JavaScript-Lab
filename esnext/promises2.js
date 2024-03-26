let p = new Promise(function(resolve) {
    resolve(['Ana','Bia','Carlos','Daniel'])
})

p
   .then(valor => valor[0]) //O valor do próximo then é sempre igual ao retorno da funça anterior
   .then(valor => console.log(valor[0])) // nesse caso, o valor é igual ao retorno valor[0], que é a Ana