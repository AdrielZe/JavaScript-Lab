const notas = [6.7,4.3,8.3,7.9,2.8,1.6]

for (let i in notas){
    console.log(notas[i]); // Itera por todos os objetos do array
}

const pessoa = {
    nome:'Ana',
    sobrenome:'Silva',
    idade:29,
    peso:64
}


for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`); //For in também itera sobre atributos de um objeto
}

