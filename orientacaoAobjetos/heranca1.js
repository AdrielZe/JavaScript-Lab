const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo:'V40',
    velMax: 200
}

console.log(ferrari.__proto__); // __proto__ retorna o objeto pai (protótipo)
console.log(ferrari.__proto__ === Object.prototype) ; 
console.log(volvo.__proto__ === Object.prototype);

function MeuObjeto(){}
    console.log(typeof Object, typeof MeuObjeto);
    console.log(Object.prototype, MeuObjeto.prototype);
