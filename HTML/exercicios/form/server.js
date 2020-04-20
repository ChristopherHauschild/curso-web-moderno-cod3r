const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Lê corpo da requisição e transforma em objeto para ser interpretado
app.use(bodyParser.urlencoded({ extend: true }))

// Atendendo requisição do método POST em cima da URL usuarios
app.post('/usuarios', (req, res) => {
    // console.log(req.body) -> o que foi recebido através do body
    console.log(req.body)
    res.send('<h1>Parabéns. Usuário incluído!!!</h1>')
})

// Recebi id diretamente na URL
app.post('/usuarios/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>Parabéns. Usuário alterado!!!</h1>')
})

app.listen(3003)