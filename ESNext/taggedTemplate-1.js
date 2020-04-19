// Template string -> delimitar string entre backticks - ``
// Tagged Template -> processar template string através de uma função

function tag(partes, ...valores) { // ...valores conjunto de parametros que serão convertidos em array
    console.log(partes)
    console.log(valores) 
    return 'Outra String'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)