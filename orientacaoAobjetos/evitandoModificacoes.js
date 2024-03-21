//Object.preventExtensions --> faz com que não seja possível adicionar novos atributos à um objeto, além daqueles que eu já defini.
//--> não é possível adicionar, mas é possível excluir e editar.

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto)); //Testa se um objeto foi criado com um preventExtension

//Object.seal --> faz com que não seja possível adicionar e excluir atributos do objeto, mas ainda é possível editar
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa)); //Testa se um objeto foi criado com um Object.seal

//Object.freeze --> faz com que não seja possível adicionar, excluir e nem editar atributos do objeto.


