// CLIENTE
function criarCliente(nome, email, vip) {
    if (nome === "") return false
    if (!email.includes("@")) return false
    return { nome, email, vip }
}

// PET
function cadastrarPet(nome, tipo, idade) {
    if (nome === "") return false
    if (!tipo) return false
    if (isNaN(idade)) return false
    return { nome, tipo, idade }
}

// PRODUTO
function criarProduto(nome, preco) {
    if (preco < 0) return false
    if (preco === 0) return false
    return { nome, preco }
}

// CARRINHO
function adicionarCarrinho(carrinho, produto) {
    carrinho.push(produto)
    return carrinho
}

function removerCarrinho(carrinho) {
    carrinho.shift()
    return carrinho
}

function calcularTotal(carrinho) {
    let total = 0
    carrinho.forEach(p => total += p.preco)

    if (total > 100) {
        total *= 0.9
    }

    return Number(total.toFixed(2))
}

// EXPORTAR
module.exports = {
    criarCliente,
    cadastrarPet,
    criarProduto,
    adicionarCarrinho,
    removerCarrinho,
    calcularTotal
}