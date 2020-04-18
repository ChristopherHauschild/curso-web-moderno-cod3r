console.log(module.exports) // Objeto vazio
console.log(module.exports === this) // Duas referencias para o mesmo objeto que o module.exports aponta
console.log(module.exports === exports)

this.a = 1 // a será visível fora do arquivo
exports.b = 2 // b será visível fora do arquivo 
module.exports.c = 3 //c será visível fora do arquivo

exports = null // Outra variável
console.log(module.exports)

exports = { nome:'Teste' }

// Para atribuir novo objeto a ser exportado, utilizar module.exports

module.exports = { publico: true }