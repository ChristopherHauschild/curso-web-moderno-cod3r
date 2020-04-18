// Node faz cache dos módulos, mantém em instância única

module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}