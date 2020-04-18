const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) {
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto // A chave do produto é o ID e o valor o próprio produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    // Retorna todos os valores dentro do objeto
    return Object.values(produtos)
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto}