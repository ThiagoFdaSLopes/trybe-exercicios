class Student {
  private _matricula: number;
  private _nome: string;
  private _notasProvas: number[] = [];
  private _trabalhoNotas: number[] = [];

  constructor(matricula: number, nome: string) {

    this._matricula = matricula;
    this._nome = nome;
  }

  get getStudentNota() {
    console.log((this._notasProvas.reduce((acc, curr) => acc + curr, 0) + this._trabalhoNotas.reduce((acc, curr) => acc + curr, 0)) / 6);
    return
  }

  set setStudentNotas(notasProvas: number[]) {
    if(notasProvas.length !== 4) {
      throw new Error('Notas de provas tem 4 valores');
    }
    this._notasProvas = notasProvas;
  }

  set setStudentNotasTrabalhos(notasTrabalho: number[]) {
    if(notasTrabalho.length !== 2) {
      throw new Error('Notas de provas precisar ter 2 valores');
    }
    this._trabalhoNotas = notasTrabalho;
  }
}

const newStudent = new Student(1290327243-2, 'Thiago Lopes');

newStudent.setStudentNotas = [2, 5, 6, 7];
newStudent.setStudentNotasTrabalhos = [9, 9];

newStudent.getStudentNota