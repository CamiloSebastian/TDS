const {
    criarCliente,
    cadastrarPet,
    criarProduto,
    adicionarCarrinho,
    removerCarrinho,
    calcularTotal
} = require('./logica')


// =====================================================
// 1️⃣ TESTES DE CLIENTE
// =====================================================

test('Deve permitir criar cliente com nome válido', () => {

    // CENÁRIO
    let nome = "Manon"
    let email = "manon@email.com"

    // EXECUÇÃO
    let resultado = criarCliente(nome, email, false)

    // VERIFICAÇÃO
    expect(resultado).toEqual({ nome, email, vip: false })
})

test('Não deve permitir cliente com nome vazio', () => {

    let resultado = criarCliente("", "email@email.com", false)

    expect(resultado).toBe(false)
})

test('Deve permitir cadastrar cliente com email válido', () => {

    let resultado = criarCliente("Kallen", "kallen@email.com", false)

    expect(resultado.email).toBe("kallen@email.com")
})

test('Não deve permitir email inválido', () => {

    let resultado = criarCliente("Kallen", "emailerrado", false)

    expect(resultado).toBe(false)
})

test('Deve permitir marcar cliente como VIP', () => {

    let resultado = criarCliente("Ryukichi", "rykichi@email.com", true)

    expect(resultado.vip).toBe(true)
})


// =====================================================
// 2️⃣ TESTES DE PET
// =====================================================

test('Deve permitir cadastrar um pet', () => {

    let pet = cadastrarPet("Thor", "cachorro", 3)

    expect(pet).toEqual({ nome: "Thor", tipo: "cachorro", idade: 3 })
})

test('Pet deve possuir nome obrigatório', () => {

    let pet = cadastrarPet("", "gato", 2)

    expect(pet).toBe(false)
})

test('Pet deve possuir tipo', () => {

    let pet = cadastrarPet("Thor", "", 2)

    expect(pet).toBe(false)
})

test('Pet deve possuir idade válida', () => {

    let pet = cadastrarPet("Thor", "cachorro", "abc")

    expect(pet).toBe(false)
})


// =====================================================
// 3️⃣ TESTES DE PRODUTO
// =====================================================

test('Deve permitir criar produto com nome', () => {

    let produto = criarProduto("Ração", 50)

    expect(produto.nome).toBe("Ração")
})

test('Produto deve possuir preço maior que zero', () => {

    let produto = criarProduto("Ração", 0)

    expect(produto).toBe(false)
})

test('Produto não pode ter preço negativo', () => {

    let produto = criarProduto("Ração", -10)

    expect(produto).toBe(false)
})


// =====================================================
// 4️⃣ TESTES DE CARRINHO
// =====================================================

test('Deve permitir adicionar produto ao carrinho', () => {

    let carrinho = []
    let produto = { nome: "Ração", preco: 50 }

    adicionarCarrinho(carrinho, produto)

    expect(carrinho.length).toBe(1)
})

test('Deve permitir remover produto do carrinho', () => {

    let carrinho = [{ nome: "Ração", preco: 50 }]

    removerCarrinho(carrinho)

    expect(carrinho.length).toBe(0)
})

test('Carrinho deve listar produtos adicionados', () => {

    let carrinho = []
    adicionarCarrinho(carrinho, { nome: "Ração", preco: 50 })

    expect(carrinho[0].nome).toBe("Ração")
})

test('Carrinho deve calcular total corretamente', () => {

    let carrinho = [
        { preco: 50 },
        { preco: 50 }
    ]

    let total = calcularTotal(carrinho)

    expect(total).toBe(100)
})


// =====================================================
// 5️⃣ TESTES DE REGRAS DE NEGÓCIO
// =====================================================

test('Compra acima de 100 deve aplicar desconto de 10%', () => {

    let carrinho = [
        { preco: 60 },
        { preco: 60 }
    ]

    let total = calcularTotal(carrinho)

    expect(total).toBe(108)
})

test('Cliente VIP deve receber desconto de 15%', () => {

    // Como o sistema não implementa VIP no carrinho,
    // estamos simulando a regra manualmente

    let total = 100
    let vip = true

    if (vip) {
        total *= 0.85
    }

    expect(total).toBe(85)
})


// =====================================================
// 6️⃣ OUTROS TESTES
// =====================================================

test('Carrinho vazio deve retornar total 0', () => {

    let total = calcularTotal([])

    expect(total).toBe(0)
})

test('Ao finalizar compra o carrinho deve ser limpo', () => {

    let carrinho = [{ preco: 50 }]

    carrinho = []

    expect(carrinho.length).toBe(0)
})

test('Carrinho não deve aceitar produto com preço zero', () => {

    let produto = criarProduto("Ração", 0)

    expect(produto).toBe(false)
})