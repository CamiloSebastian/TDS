class Carrinho:

    def __init__(self):
        self.itens = []

    def adicionar(self, valor):
        self.itens.append(valor)

    def remover(self, valor):
        self.itens.remove(valor)

    def total(self):
        return sum(self.itens)