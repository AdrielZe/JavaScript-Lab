function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

let temporizador = async () => {
    await esperarPor(2000)
    console.log(1)

    await esperarPor(3000)
    console.log(2)

    await esperarPor(1000)
    console.log("fim");
}

async function executarDeVerdade() {
    const valor = await temporizador()
    console.log(valor)
}


temporizador()
executarDeVerdade()
// esperarPor(2000)
// .then(() => console.log('Executando promise...'))
// .then(esperarPor)
// .then(() => console.log ('De novo'))
// .then(esperarPor)
// .then(() => console.log ('Again'))