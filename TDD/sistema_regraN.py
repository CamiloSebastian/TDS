class SistemaLogin:

    def login(self, usuario, senha):

        if usuario == "" or senha == "":
            return False

        if usuario == "admin" and senha == "123":
            return True

        return False


class RegrasNegocio:

    def desconto(self, valor):
        return valor * 0.9

    def desconto_vip(self, valor):
        return valor * 0.8

    def media(self, notas):
        return sum(notas) / len(notas)

    def aprovado(self, media):
        return media >= 7