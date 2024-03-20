function soma() {
   let soma = 0
   for( i in arguments){        //Com a expressão do for i in arguments, podemos decidir quantos parâmetros terá a nossa função na hora de declará-la, assim tornando seus parâmetros variáveis
    soma+=arguments[i]
   }
   return soma;
}

//Exemplo:
console.log(soma());
console.log(soma(1));
console.log(soma(6,4,2,34,5,2));
console.log(soma("Oi",2.3,5.1)); //Podemos misturar até diferentes tipos de dados