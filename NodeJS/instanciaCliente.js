const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // Invocando função factory
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc() // Como apontam para mesma instância o contadorB recebe incremento
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc() // Apontam para novas instâncias criadas a partir do factory
console.log(contadorC.valor, contadorD.valor)
