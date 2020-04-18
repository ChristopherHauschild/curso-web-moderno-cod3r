// Módulo File System faz a leitura de arquivos
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Leitura sincrona...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Leitura assincrona...
fs.readFile(caminho, 'utf-8', (err,conteudo) => { // Chama uma callback
    const config = JSON.parse(conteudo) // Precisa ser transformado em objet
    console.log(`${config.db.host}:${config.db.port}`)
})

// Faz a leitura e ja converte em objeto
const config = require('./arquivo.json')
console.log(config.db)

// Leitura de uma pasta
// __dirname leitura da pasta atual
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})