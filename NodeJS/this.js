// This aponta para module.exports

console.log(this === global) // False
console.log(this === module) // False

console.log(this === module.exports) 
console.log(this === exports) 
// Verdadeiros pois apontam para a mesma referência / objeto

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    // Não aponta para module.exports

    console.log(this === global)
    // Dentro de uma função aponta para global
    // Utilizo para que seja visível fora do módulo
}

logThis()