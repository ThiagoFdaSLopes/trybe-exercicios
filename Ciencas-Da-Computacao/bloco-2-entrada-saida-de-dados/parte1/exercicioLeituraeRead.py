file = open("alunos.txt", "r")

for aluno in file:
    chave = aluno.split()
    if int(chave[1]) < 6:
        print(chave[0])

file.close()
