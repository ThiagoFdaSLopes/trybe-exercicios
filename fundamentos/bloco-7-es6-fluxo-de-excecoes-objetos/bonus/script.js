const allLessons = 
{
    lesson1: {
      materia: 'Matemática',
      numeroEstudantes: 20,
      professor: 'Maria Clara',
      turno: 'manhã'
    },
    lesson2: {
      materia: 'História',
      numeroEstudantes: 20,
      professor: 'Carlos',
      turno: 'Noite'
    },
    lesson3: {
      materia: 'História',
      numeroEstudantes: 10,
      professor: 'Maria Clara',
      turno: 'noite'
    },
    lesson4: {
        materia: 'História',
        numeroEstudantes: 10,
        professor: 'Maria Clara',
        turno: 'noite'
    },
    lesson5: {
        materia: 'História',
        numeroEstudantes: 10,
        professor: 'Maria Clara',
        turno: 'noite'
    }
}
// [ 'materia', 'Matemática' ]
// [ 'numeroEstudantes', 20 ]
// [ 'professor', 'Maria Clara' ]
// [ 'turno', 'manhã' ]


//Bonus 1
// const pegaEstu = (obj, aula) => {
//     let contador = 0;
//     for(i in obj){
//         if(obj[i].materia === aula){
//             contador += obj[i].numeroEstudantes
//         }
//     }
//     return `Numero de estudantes na aula de ${aula} é de: ${contador} alunos.`;
// }

// console.log(pegaEstu(allLessons, 'História'));

const relatorio = (obj, professor) => {
    let result = new Object();
    let aulas =[];
    let contador = 0;

    for (i in obj) {
      if(obj[i].professor === professor){
        aulas.push(obj[i].materia);
        contador += obj[i].numeroEstudantes;
      }
    }
    result.professor = professor;
    result.aulas = aulas;
    result.estudantes = contador;

    return result;
}

console.log(relatorio(allLessons, 'Maria Clara'));