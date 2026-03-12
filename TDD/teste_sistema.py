import unittest

from calculadora import Calculadora
from sistema import SistemaLogin, RegrasNegocio
from carrinho import Carrinho


class TestCalculadora(unittest.TestCase):

    def setUp(self):
        self.calc = Calculadora()

    def test_soma(self):
        self.assertEqual(self.calc.somar(2, 3), 5)

    def test_soma_negativo(self):
        self.assertEqual(self.calc.somar(5, -2), 3)

    def test_subtracao(self):
        self.assertEqual(self.calc.subtrair(7, 3), 4)

    def test_multiplicacao(self):
        self.assertEqual(self.calc.multiplicar(4, 3), 12)

    def test_divisao(self):
        self.assertEqual(self.calc.dividir(10, 2), 5)

    def test_divisao_zero(self):
        with self.assertRaises(ValueError):
            self.calc.dividir(10, 0)


class TestLogin(unittest.TestCase):

    def setUp(self):
        self.login = SistemaLogin()

    def test_login_valido(self):
        self.assertTrue(self.login.login("admin", "123"))

    def test_login_invalido(self):
        self.assertFalse(self.login.login("admin", "999"))

    def test_usuario_vazio(self):
        self.assertFalse(self.login.login("", "123"))

    def test_senha_vazia(self):
        self.assertFalse(self.login.login("admin", ""))


class TestRegras(unittest.TestCase):

    def setUp(self):
        self.regra = RegrasNegocio()

    def test_desconto(self):
        self.assertEqual(self.regra.desconto(100), 90)

    def test_desconto_vip(self):
        self.assertEqual(self.regra.desconto_vip(100), 80)

    def test_media(self):
        self.assertEqual(self.regra.media([7, 8, 9]), 8)

    def test_aprovado(self):
        self.assertTrue(self.regra.aprovado(7))

    def test_reprovado(self):
        self.assertFalse(self.regra.aprovado(5))


class TestCarrinho(unittest.TestCase):

    def setUp(self):
        self.carrinho = Carrinho()

    def test_adicionar(self):
        self.carrinho.adicionar(50)
        self.assertIn(50, self.carrinho.itens)

    def test_remover(self):
        self.carrinho.adicionar(50)
        self.carrinho.remover(50)
        self.assertNotIn(50, self.carrinho.itens)

    def test_total(self):
        self.carrinho.adicionar(50)
        self.carrinho.adicionar(30)
        self.assertEqual(self.carrinho.total(), 80)


if __name__ == "__main__":
    unittest.main()