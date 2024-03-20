function Pessoa(){ // Ao utilizar a arrow function, não precisamos utilizar o "self", como visto no arquivo 'arrowFunction1.js'
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade);
    },1000)
}

new Pessoa