// Algum processamento assincrono
// Ser atendida ou ser rejeitada
// Ex: acessar arquivo remoto a partir de callback, passando arquivo de erro e de sucesso

function falarDepoisDe(segundos, frase) {
    // resolve -> função que será chamada quando promessa for resolvida
    // reject -> função que será chamada quando promessa for rejeitada
    return new Promise((resolve, reject) => { 
        setTimeout(() => { // Simula tempo de processamento / retorno
            resolve(frase) // Aceita 1 único parâmetro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!') 
    .then(frase => frase.concat('?!?')) // Quando resolve um then passa para o outro
    .then(outrFrase => console.log(outrFrase))


function falarDepoisDeErro(segundos, frase) {
    return new Promise((resolve, reject) => { 
        setTimeout(() => { 
            reject(frase) 
        }, segundos * 1000)
    })
}
    
falarDepoisDeErro(3, 'Que legal!') 
    .then(frase => frase.concat('?!?'))
    .then(outrFrase => console.log(outrFrase))
    .catch(e => console.log(e))
    // Tratando erro, retorna frase recebida no início da função