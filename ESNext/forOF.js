// For Of -> intera em cima de valores

for (let letra of "Cod3r") { // Percorre as letras da string
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) { // Percorre em cima do indice
    console.log(i)
}

for (let assunto of assuntosEcma) { // Percorre em cima do valor
    console.log(assunto)
}

const assuntosMap = new Map([ // Irá permitir que For Of retorne chave e valor
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) { // Retorna chave e valor por contato do método Map
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) { // Retorna chaves
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [chave, valor] of assuntosMap.entries()) {
    console.log(chave, valor)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra) 
}