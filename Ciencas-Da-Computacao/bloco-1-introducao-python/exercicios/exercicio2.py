"""
2 - Calcule a média aritmética dos valores contidos em uma lista
"""

list = [10, 20, 3, 4, 5]
media = 0
counter = 0
for number in list:
    counter += number
    media = counter / len(list)
print(media)

# Outra maneira de fazer

list = [10, 20, 3, 4, 5]
media = sum(list) / len(list)
print(media)
