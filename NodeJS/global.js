// console.log(global)

// Objeto e função disponíveis para outros arquivos
// Atributos ficam passíveis de alterações

global.MinhaApp = Object.freeze({ // Torna atributos imutáveis
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Legal'
})