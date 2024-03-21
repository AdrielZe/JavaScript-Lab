//reduce- transforma um array - para mim é o único dos métodos um pouco mais complexos
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

//O acumulador é um elemento que vai acumulando de acordo com as iterações, e o atual é o elemento atual da iteração
//Por exemplo, nesse caso, temos o 7.3 ( caso não definirmos o acumulador após o final da função callback, o acumulador se torna o primeiro elemento do array) como acumulador e na primeira iteracao temos o 9.2 como atual. o acumulador soma com o atual
//(9.2) e tem como resultado 16.5. Passando para a próxima iteração, nosso acumulador agora está em 16.5 e o elemento atual é o 9.8
//O acumulador soma então com 9.8 e fica 26.3. E assim por diante até o fim da nossa condição

//Podemos definir também um valor inicial para o acumulador, depois de declararmos a função callback

const resultado = alunos.map(a => a.nota).reduce((acumulador,atual) => { 
    console.log(acumulador,atual)
    return acumulador + atual
}, 0)

//Aqui, calculamos o resultado da soma de todas as notas para exemplificar a explicação do reduce ( é claro que existem maneiras muito)
//mais fáceis de realizar esse cálculo

const numbers = [10, 20, 5, 40, 30];
const maxNumber = numbers.reduce((max, currentValue) => currentValue > max ? currentValue : max, numbers[0]);
console.log(maxNumber); // Saída: 40