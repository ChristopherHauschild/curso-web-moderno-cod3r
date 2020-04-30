// Função que retorna função Middleware
function saudacao(nome) {
    return function(req, res, next) {
        console.log(`Seja bem vindo(a) ${nome}!`)
        next()
    }
}

module.exports = saudacao