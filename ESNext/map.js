// Map -> chave pode ser função, objeto, numero...
const tecnologias = new Map()
tecnologias.set('react', { framework: false }) // Estrutura chave valor
tecnologias.set('angular', { framework: true }) 

console.log(tecnologias.react) // Undefined
console.log(tecnologias.get('react')) // Objeto sendo retornado a partir do get
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'função'], // Função é uma chave
    [{}, 'Objeto'], // Objeto é uma chave
    [123, 'Número'] // Number é uma chave
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))

console.log(chavesVariadas.size)
// Quantos elementos há no objeto chavesVariadas

// Chave não aceita repetição
// Valor aceita repetição