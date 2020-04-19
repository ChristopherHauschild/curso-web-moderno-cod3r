// Arrow function -> sempre função anonima

// Estrutura: 
// variável que receberá função  =  parametros  =>  processos da função 
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Se colocar corpo {} precisa ter retorno
// Com um parâmetro não precisa de ()

const soma = valor => valor // ...

// Arrow function (this)
// Associado ao local onde foi construida a função
const lexico1 = () => console.log(this === exports) // Sempre aponta para module.exports


// Parametros default
// Caso parametro volte nulo ele assuma o valor definido como padrão
function log(texto = 'Node') {
    console.log(texto)
}

// Operador rest - parametros espalhados agrupados em um array
// Varios parametros na chamada da função, agrupados num array
function total(...numeros) { // Função recebe conjunto de numeros
    let total = 0
    numeros.forEach(n => total += n) //forEach percorre array criado a partir de parametros rest
    return total
}



