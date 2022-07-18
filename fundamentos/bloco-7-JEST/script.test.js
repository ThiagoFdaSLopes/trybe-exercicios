const script = require('./script');

it('testa soma', () => {
    const sum = script.sum(5, 2);
    expect(sum).toBe(7);
});

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
        materia: 'Inglês',
        numeroEstudantes: 15,
        professor: 'Maria Clara',
        turno: 'noite'
    },
    lesson5: {
        materia: 'Ciências',
        numeroEstudantes: 35,
        professor: 'Maria Clara',
        turno: 'noite'
    }
}

it('testa objeto', () => {
    const test = script.relatorio(allLessons, 'Maria Clara');
    expect(test).toEqual({
        professor: 'Maria Clara',
        aulas: [ 'Matemática', 'História', 'Inglês', 'Ciências' ],
        estudantes: 80
    });
});