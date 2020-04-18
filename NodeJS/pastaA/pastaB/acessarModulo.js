const moduloA = require('../../moduloA') // Caminho relativo
// (D:\Dados\Documents\Christopher\Cod3r\NodeJS\modulo-a.js) // Caminho absoluto
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC') // Não é preciso referenciar index.js
console.log(c.ola2)

// const http = require('http') /// Módulo interno do Node
// http.createServer((req, res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)