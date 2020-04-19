// let e const
// let -> tem escopo global, de função e bloco
// var -> escopo de global e função
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a) // É possível acessar
// console.log(b) // Não está definida no escopo global

// Template String -> delimitar string com `` - crase -
// Possível interpolar variável com ${variavel}
// Interpolar -> interpretar string
// Quebra linha conforme sintaxa do código
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)
const [x, y] = [1, 2, 3]
console.log(x, y)

const { idade, nome } = { nome: 'Ana', idade: 9 }
console.log(idade, nome)

// Permite inverter arrays
// Tira da estrutura, extrai elementos de array, por exemplo
// Objeto {}  Chave []

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Operação de desestruturação
const { nome, idade } = pessoa // Tire de dentro de pessoa o nome e idade
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // Tire de dentro de pessoa o nome e idade e atribua identificadores aos mesmos
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // Se variável bemHumorada não existe no objeto, retorna como true
console.log(sobrenome, bemHumorada)

const { endereco:{ logradouro, numero } } = pessoa // Extrai variáveis de endereço dentro do objeto
console.log(logradouro, nome)