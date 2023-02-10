import IPerson from '../interfaces/IPerson'
export default class Person implements IPerson {

  constructor(private _name: string, private _birthDate: Date) {}

  get getName(): string {
    return this._name;
  }

  get getBirthDate(): Date {
    return this._birthDate;
  }

  set setName(n: string) {
    if(n.length < 3) throw new Error('Nome precisa ter pelo menos 3 letras')

    this._name = n;
  }

  set setBirthDate(value: Date) {
  
    if(value.getTime() > new Date().getTime()) throw new Error(`O Data nao pode ser maior que a data de hoje`);
    if(this.getAge(value) > 120) throw new Error(`A idade nao pode ser maior que 120`);

    this._birthDate = value;
  }

  private getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime());
    const yearMs = 31_536_000_000;
    return Math.floor(diff / yearMs);
  }
}
