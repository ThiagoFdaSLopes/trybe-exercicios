class Exemplo:
    def __init__(self):
        self.__privado = "Eu sou atributo privado"

    def __new__(cls, *args, **kwargs):
        instance = super().__new__(cls)
        return instance

    def __metodo__privado(self):
        print("Este metodo e privado")

    def metodo_publico(self):
        print("Metodo Publico")
        self.__metodo__privado()
