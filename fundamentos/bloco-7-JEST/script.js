const sum = (a, b) => a + b;

const relatorio = (obj, professor) => {
    let result = new Object();
    let aulas = [];
    let contador = 0;

    for (i in obj) {
        if (obj[i].professor === professor) {
            aulas.push(obj[i].materia);
            contador += obj[i].numeroEstudantes;
        }
    }
    result.professor = professor;
    result.aulas = aulas;
    result.estudantes = contador;

    return result;
}

module.exports = {
    sum,
    relatorio,
}