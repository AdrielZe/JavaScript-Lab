const [a] = [10]
console.log(a);

//Desestruturando o Array
const [n1, ,n3, ,n5,n6 = 0] = [10,7,9,8]
//Podemos montar arrays assim em JS (A ordem que declaramos é a mesma ordem dos índices)
//Nesse caso n1=0, n2=7,n3=9,n4=8, n5= undefined, n6= 0
console.log(n1,n3,n5,n6);

const[,[, nota]] = [[, 8, 8],[9,6,8]]//só para mostrar, esse tipo de array não é utilizado normalmente
console.log(nota);
