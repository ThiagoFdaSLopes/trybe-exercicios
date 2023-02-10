import cryptoRandomString from 'crypto-random-string';
import Person from './Person';

export default class Student extends Person {
  private _enrollment: string
  private _examsGrades: number[] = []
  private _assignmentsGrades: number[] = []

  constructor(private name: string, private birthDate: Date) {
    super(name, birthDate)
    this._enrollment = this.generateEnrollment();
  }

  private generateEnrollment(): string {
    const matricula = cryptoRandomString({ length: 16, type: 'base64' });
    return matricula;
  }

  private sumGrades() {
    return (this._examsGrades.reduce((acc, curr) => acc + curr, 0) + this._assignmentsGrades.reduce((acc, curr) => acc + curr, 0));
  }

  get sumAverageGrade() {
    return (this.sumGrades() / 6)
  }

  set newExamsGrades(array: number[]) {
    if(array.length > 4 ) throw new Error('A pessoa estudante deve possuir no máximo 4 notas de provas');

    this._examsGrades = array;
  }

  set newAssignmentGrades(array: number[]) {
    if(array.length > 2 ) throw new Error('A pessoa estudante deve possuir no máximo 2 notas de trabalhos');

    this._assignmentsGrades = array;
  }
}