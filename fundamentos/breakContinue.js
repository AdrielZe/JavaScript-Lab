const nums = [1,2,3,4,5,6,7,8,9,10];

for (x in nums){
    if( x == 5) break // para (quebra) a execução do laço for
    console.log(`x = ${nums[x]}`); // 
}

for (y in nums) {
    if(y == 5) continue // Para apenas na repetição atual e continua nas próximas
    console.log(`${y} = ${nums[y]}`);
}

externo: for (a in nums) { 
    for (b in nums) {
        if(a == 2 && b == 3) break externo //'Externo' é o rótulo. Se usarmos um break sem o rótulo, ele quebrará o for mais interno. Se utilizarmos o rótulo, ele quebrará o for indicado. Nesse
//caso, é o for externo.
console.log(`Par = ${a}.${b}`); //Essa estrutura não é muito usada, foi só colocada aqui para fins de explicação
    }
}

console.log("Fim");
