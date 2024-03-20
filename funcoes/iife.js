//IIFE - Immediately Invoked Function Expression
//Ajuda a 'fugir' do escopo global

(function() {
    console.log("Será executado na hora");
    console.log("Foge do escopo mais abrangente");
})()

//Dentro dela, podemos definir constantes, variáveis e outras funções, sem interferir em nada no escopo global