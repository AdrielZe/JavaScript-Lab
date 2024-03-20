function tratarErroELancar(erro){
   //  throw new Error('...')
   //   throw 10
   //  throw 'mensagem'
 throw{ //Lança um erro
    nome:erro.name,
    msg:erro.message,
    date: new Date
 }
}



function imprimirNomeGritado(obj){
    try{
    console.log(obj.name.toUpperCase() + '!!!'); //Try é uma chamada que pode gerar um tipo de erro
    }
    catch(e){
        tratarErroELancar(e); // Catch é o tratamento caso o Try lance uma Exception
    }
    finally{
        console.log('Finally'); //Finally é executado mesmo sem uma exceção ser lançada
    }
}

const obj = {name: 'Adriel'};


imprimirNomeGritado(obj)