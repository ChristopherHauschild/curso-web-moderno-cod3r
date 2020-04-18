// Apenas o que foi exportado será visível em outros módulos
let soma = a + b

// Substituindo objeto vazio padrão por novo objeto
module.exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}