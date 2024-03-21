//Sempre que criar uma classe com o final 'Cliente', significa que essa classe vai usar outros módulos externos
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
console.log(moduloA)
console.log(moduloB.boaNoite());
console.log(moduloB);
