"""
3 - Crie uma função que receba uma lista de nomes e
retorne o nome com a maior quantidade de caracteres.
"""

nomes = ["Ana", "Maria", "Pedro", "João", "Lucas"]


def biggest(list):
    maior = ""
    for nome in nomes:
        if len(nome) > len(maior):
            maior = nome
    return maior
