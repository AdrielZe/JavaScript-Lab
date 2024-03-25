const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // axios faz requisiçoes para obter informacoes de algo remoto


//mulher chinesa com o menor salário?

axios.get(url).then(response => {
    const funcionarios = response.data

    const mulheresChinesas = funcionarios.filter(f => f.pais == 'China' && f.genero == 'F')

    const menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual;
    }

    const mulherChinesaComMenorSalario = mulheresChinesas.reduce(menorSalario)
    console.log(mulherChinesaComMenorSalario);
    
})



