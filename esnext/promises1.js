// Uma 'promessa', que pode ser atendida ou pode ser rejeitada, dependendo da situação. Representa um processo assíncrono
function falarDepoisDe(segundos, frase) {
    return new Promise( (resolve,reject) => {
       setTimeout(() => {
        resolve(frase)
       }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que ótimo!')
   .then(frase => frase.concat('?!?!?'))
   .then(outraFrase => console.log(outraFrase))
   .catch( e => console.log(e))

   //files.cod3r.com.br/curso-js/turmaA.json