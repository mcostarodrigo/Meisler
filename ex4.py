class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

nome = "João"
idade = 25

pessoa = Pessoa(nome, idade)

print("Nome:", pessoa.nome)
print("Idade:", pessoa.idade)
