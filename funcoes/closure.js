const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
       return x
    }
    return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao()); // Nosso outputt será ''Local'', pois a variável x= 'local' está dentro do escopo da função fora(), onde
//está a nossa função dentro()

//CLOSURE é esse escopo que envolve a função