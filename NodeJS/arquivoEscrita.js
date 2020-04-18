const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}
// Escreve objeto em arquivo criado na pasta atual 
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!') // Se err for nulo arquivo foi salvo com sucesso
})