//Cadeia de protótipos ( prototype chain )
const avo = { attr1: 'A'} //
const pai = {__proto__: avo, attr2: 'B'}//através do '__proto__ : avo', estou dizendo que o pai desse objeto é o avo,
// e é do avo que esse objeto vai herdar as suas características
const filho = {__proto__: pai, attr3: 'C'} //através do '__proto__ : pai', estou dizendo que o pai desse objeto é o pai,
// e é do pai que esse objeto vai herdar as suas características

console.log(filho.attr1);

//Criando Objetos e utilizando da herança:

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        this.velAtual+=delta;
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing, pois os atributos reescritos para esse objeto serão utilizados nesse objeto em questão, e não os da classe pai
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

//função setPrototypeOf define um protótipo pai para um objeto (parametro 1=  filho, parametro 2= pai)
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari);
console.log(volvo);
console.log(volvo.acelerarMais(190));
console.log(volvo.status());
ferrari.acelerarMais(200)
console.log(ferrari.status());