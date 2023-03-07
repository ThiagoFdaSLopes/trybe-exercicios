import Race from "./Race";

export default class Orc extends Race {
  private _maxLifePoint: number
  static countClassOrc: number = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity)
    this._maxLifePoint = 74;
  }

  get maxLifePoints(): number {
    return this._maxLifePoint;
  }

  static incrementCount() {
    this.countClassOrc += 1;
  }

  static createdRacesInstances(): number {
    return this.countClassOrc;
  }
}