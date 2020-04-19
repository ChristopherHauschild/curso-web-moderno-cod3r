// Estrutura de conjunto
// Não indexada != de objetos e arrays
// Não aceita repetição

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') // Será ignorado, pois não aceita repetições

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Julia', 'Lucas', 'Lucas'] // Recebe apenas 1 Lucas
const nomesSet = new Set(nomes)
console.log(nomesSet)
