// Função Middleware - recebe requisição, resposta e next
// Ordem das funções define processamento

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./API/usuario')
const produtoApi = require('./API/produto')
produtoApi('./API/produto')(app, 'com param!') // url definida na função retornada do módulo produto.js

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)


app.use(bodyParser.text()) // Qualquer texto no corpo da req será interpretado
app.use(bodyParser.json()) // Qualquer json no corpo da req será interpretado
app.use(bodyParser.urlencoded({ extended: true })) // Interpreta url enconded (ex: formulário)
// extended: true -> interpreta outros tipos de dados além da documentação padrão


app.use(saudacao('Guilherme')) // Interpreta como função Middleware

app.get('/clientes/relatorio', (req, res) => {
    // http://localhost:3000/clientes/relatorio?completo=xxx&ano=333
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {

    res.send(req.body) // Interpretar texto no corpo da req a partir do bodyParser
    // res.send(JSON.stringify(req.body))

    // Sem bodyParser

    // let corpo = ''
    // // Quando estiver chegando dados no corpo da requisição
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function() {
    //     res.send(corpo)
    // })

    
})

// :id -> pode mudar dentro da URL
app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})


app.use('/opa', (req, res, next) => {
    console.log('Antes...')
    next() 
}) // Chama próxima função dentro da requisição p/ de mesma url

app.get('/opa', (req, res, next) => {
    console.log('Durante...')
     res.json({
        data: [
             { id: 7, name: 'Ana', position: 1},
             { id: 34, name: 'Bia', position: 2},
             { id: 73, name: 'Carlos', position: 3}
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
    
    next()

    // res.json({
    //     name: 'iPad 32GB',
    //     price: 2399.99,
    //     discount: 0.12
    // })
    
    // res.send('<h1>Estou bem!</h1><br><br><h2>Tipo HTML</h2>')
})

app.use('/opa', (req, res) => {
    console.log('Depois..\n')
})


// Callback executa quando binding ocorrer com sucesso
app.listen(3000, () => {
    console.log('Backend executando...\n')
})