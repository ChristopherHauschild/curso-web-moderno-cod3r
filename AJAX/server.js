// body-parser -> responsável por fazer o parser do body da requisição
// Interpreta dados e deixa pronto para serem utilizados
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const multer = require('multer') // interpretar arquivo para upload

// middleware -> função que será executada quando determinada requisição chegar
// Dentro desta pasta deve servir os arquivos estáticos
app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true })) // Transforma dados de um submit de formulário em objeto
app.use(bodyParser.json()) // Irá transformar json recebido em objeto

// Quando ocorrer uma requisição do tipo get, desta url, chame a função
// app.get('/teste', (req, res) => res.send('Ok'))

const storage = multer.diskStorage({
    // serve para configurar a pasta que será salvo o arquivo e também para editar nome do mesmo
    destination: function(req, file, callback) {
        callback(null, './upload') // recebe como parâmetro pasta em que será salvo arquivo, neste caso atual
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`) // definindo nome padrão do arquivo
    }
})

const upload = multer({ storage }).single('arquivo') // interpreta upload recebido via requisição
// arquivo -> recebe info do input de mesmo nome

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro')
        }

        res.end('Concluído com sucesso')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body, // pegando tudo que vem do body e passando para array -> necessário ter configurado bodyParser
        id: 1 // retorno tudo que venho do body + o id
    })
})

app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query -> '/parOuImpar'/:numero=135
    // req.params -> '/parOuImpar/:numero'
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))