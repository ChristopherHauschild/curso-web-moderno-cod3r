// Simplificar uso do código assincrono
// Simplificar o uso de Promises
// Tornando código mais sincrono

const http = require('http')

const getTurma = letra => { // Função assincrona
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try { // Se conseguir
                    resolve(JSON.parse(resultado))
                } catch (e) { // Caso haja problema
                    reject(e)
                }
            })
        })
    })
}


// Para usar await deve-se informar async na declaração da função
let obterAlunos = async () => { 
    const tA = await getTurma('A') // Não preciso chamar then
    const tB = await getTurma('B')
    const tC = await getTurma('C')

    return [].concat(tA, tB, tC)
    // Retorna um objeto do tipo asyncFunction 
}

obterAlunos()
    .then(alunos => alunos.map(a = a.nome))
    .then(nomes => console.log(nomes))