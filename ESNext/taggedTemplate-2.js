// Controlar parse de Template String a partir de função
function real(partes, ...valores) { // ...valores interpolados em array
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$ ${valor.toFixed(2).replace('.', ',')}`
        resultado.push(partes[indice], valor)
        // Fazendo essa mescla, reconstrói string de forma correta
    })
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)