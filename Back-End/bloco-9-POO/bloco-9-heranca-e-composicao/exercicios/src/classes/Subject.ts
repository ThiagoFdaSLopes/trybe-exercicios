export default class Subject {

  constructor(private _name: string) {}

  get getNameSubject() {
    return this._name;
  }

  set newName(str: string) {
    if(str.length < 4) throw new Error('O nome tem que possuir no mínimo 3 caracteres');

    this._name = str;
  }
}
