const pai = { nome: 'Pedro' , corCabelo: 'preto'}

const filha1 = Object.create(pai) // Ao criar um objeto assim, já setamos o 'pai' como protótipo do objeto que estamos criando,
//assim já aplicando a herança diretamente, sem precisar fazer o uso do Object.setPrototypeOf
filha1.nome = 'Ana'
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, { //No segundo parâmetro, também podemos passar atributos e já definir o valor deles, e se eles são
    //editáveis ou listáveis
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome);
filha2.nome = 'Carla' // Isso não vai alterar o nome de filha2, pois setamos 'writable' como falso.
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))
console.log(Object.keys(filha2.__proto__))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?  // função hasOwnProperty() verifica se o atributo atual é proveniente do próprio objeto ou do objeto pai
    console.log(key) : console.log(`Por herança: ${key}`); 
}
