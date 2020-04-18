const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // Faz requisições para obter informações de servidor remoto

const chineses = funcionario => funcionario.pais === 'China'
const mulheres = funcionario => funcionario.genero === 'F'

const menorSalario = (func, funcAtual) => {
    // Sempre será passado pelo reduce o funcionário com menor salário até então
    // func vai sendo substituído 
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})