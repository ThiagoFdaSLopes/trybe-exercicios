file = open("arquivo.txt", mode="w")

file.write("Silabas\n")

list = ["Frases\n", "Palavras\n"]

file.writelines(list)

print("Texto", file=file)

file.close()


# Leitura
file = open("arquivo.txt", mode="r")
content = file.read()
print(content)
file.close()
