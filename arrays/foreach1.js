const aprovados = ['Agatha','Aldo','Daniel','Raquel']
//forEach pode ter 3 parametros ( nome, indice,array)
aprovados.forEach( (nome,indice,array) => {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)