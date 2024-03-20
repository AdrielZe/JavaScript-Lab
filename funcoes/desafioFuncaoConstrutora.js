function Pessoa(nome){
    this.nome = nomw 

    this.falar = function (){
        console.log(`Meu nome é ${nome}`)
    }

}

const p1 = new Pessoa("Pedro")

p1.falar()

//Quando acesso o this, uso a factory 