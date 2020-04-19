// Operador ... rest(juntar)/spread(espalhar)

// Uso de spread com objetos
const funcionario = { nome: 'Maria', salario: 12348.88 }
const clone = { ativo: true, ...funcionario }
// Espalhando atributos de funcionario + ativo: true para objeto clone
console.log(clone)

// Uso de spread com Arrays
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA, 'Sabrina']
// Espalhando elementos do array grupoA nesta posição do grupoFinal
console.log(grupoFinal)