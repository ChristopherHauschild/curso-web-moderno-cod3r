// Middleware pattern (Chain of Responsibility)

// contexto -> será passado de um middleware para o outro
// contexto -> forma de obter comunicação entre cadeias

const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1'
    next() // -> função que irá disparar o próximo passo na cadeia
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2'
    next()
}

const passo3 = contexto => contexto.valor3 = 'mid3'

// Função que irá executar os middlewares
// ... recebe conjunto de argumentos variados em um array
const exec = (contexto, ...middlewares) => {
    const execPasso = indice => { // Vai executar conforme indice do array middlewares
        middlewares && indice < middlewares.length && // Executa até middleware ter o mesmo tamanho do array
            middlewares[indice](contexto, () => execPasso(indice + 1))
    // Recursividade -> chamo a própria função dentro dela mesmo
    } // Para quando não houver next()
    execPasso(0) 
}

const contexto = {}
exec(contexto, passo1, passo2, passo3)
console.log(contexto)

exec(contexto, passo1, passo2, passo3) 
// Como passo3 não possui next(), executa apenas o mesmo