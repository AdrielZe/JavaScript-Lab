//Em node, cada arquivo representa um módulo
//Tudo o que eu escrever dentro de um módulo, fica visível apenas dentro do módulo
//Para tornar esse módulo público, precisamos utilizar os padrões de módulos commons js ou o padrao do ecmascript 2015
//(nao são os unicos, mas sao os mais famosos)

//Algumas formas de exportar:

this.ola = 'Fala pessoal'
exports.bemVindo = 'Bem vindo ao node'
module.exports.ateLogo = "Até o próximo exemplo:"