require('./global')
// Uma vez que carregado o que está em global fica disponível para ser utilizado

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita' 
// Alteração não é possível pois objeto foi definido com freeze
console.log(MinhaApp.nome)