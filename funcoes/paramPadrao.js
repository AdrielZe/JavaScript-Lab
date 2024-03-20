function soma1(a,b,c){ //Prática muito comum!
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0));

//Estratégia 2,3 e 4 para gerar valor padrão
function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // Essa é a mais segura de todas as estratégias, que faz com que a função retorne um valor padrão caso o parâmetro passado não seja um número
    return a + b + c
}


console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0));

//Valor padrão do es2015 , essa é a mais legível e melhor, porém ela não garante que o tipo de dado seja sempre o mesmo. Nesse caso, não garante que o tipo de dado seja sempre numérico
function soma3(a = 1, b = 1, c = 1){
    return a+b+c;
}

console.log(soma3(), soma3(3,"caixa"), soma3(1,2,3), soma3(0,0,0));
