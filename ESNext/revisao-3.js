// ES8: Object.values / Object.entries
// Object.values -> pega valores de um objeto
// Object.entries -> pega conjunto chave + objeto e transforma em matriz

const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj)) // Retorna 1, 2, 3
console.log(Object.entries(obj))
// Retorna [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
// Arrays chave valor dentro de array

// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome, // Anteriormente -> nome: nome
    ola() { // Anteriormente -> ola: function()
        return 'Teste retorno'
    }
}
console.log(pessoa.nome, pessoa.ola())

// Classe adicionada
// Será convertida para função 
class Animal {}
class Cachorro extends Animal { // Mesma função de herança do prototype
    falar() {
        return 'Auau'
    }
}
console.log(new Cachorro().falar())
// Criar instância da classe -> new NomeClasse()
