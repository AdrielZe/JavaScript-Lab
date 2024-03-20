function dobro1(a){
    return 2*a;
}

dobro2 = (a) => {  //Quando utilizamos uma Arrow Function com as chaves e parenteses e quisermos um retorno, precisamos usar o return
    return 2*a;
}

dobro3 = a => 2*a; // Quano utilizamos uma Arrow Function na mesma linha, sem a estrutura, já temos um retorno implícito,
//Portanto, não precisamos escrever return

console.log(dobro3(5))

//Funções anônimas sem parâmetro
ola = () => "Olá" //Indica que não tem nenhum parâmetro na função
ola = _ => "Olá" //Indica que há um parâmetro na função