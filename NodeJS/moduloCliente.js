// Importação com Comuns JS
// ./ pois estou representando módulo que está no meu sistema
const moduloA = require('./modulo-a') // ../ sai da pasta
const moduloB = require('./modulo-b') // Caminho relativo
// Associei às constantes o que foi exportados dos módulos A e B

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)