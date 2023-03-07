import Fighter from './Fighter/Fighter';
import Race from './Races/Race';
import Archetype from './Archetypes/Archetype'
import Energy from './Energy'
import Elf from './Races/Elf'
import Mage from './Archetypes/Mage'

export default class Character implements Fighter {
  private _race: Race
  private _archetype: Archetype
  private _maxLifePoints: number
  private _lifePoints: number
  private _strength?: number
  private _defense: number
  private _dexterity: number
  private _energy: Energy

  constructor(name: string) {
    this._dexterity = Character.generateRandomValue();
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = Character.generateRandomValue();
    this._defense = Character.generateRandomValue();
    this._energy.type_ = this._archetype.energyType;
    this._energy.amount = Character.generateRandomValue();
  }

  get race(): Race {
    return this._race;
  };

  get archetype(): Archetype {
    return this._archetype;
  };

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength as number;
  }

  get defense(): number {
    return this._defense as number;
  }

  get dexterity(): number {
    return this._dexterity;
  };

  get energy(): Energy {
    return this._energy;
  }

  receiveDamage(attackPoints: number): number {
    const damage = this._defense - attackPoints;
    if(damage > 0) this._lifePoints -= damage;
    if(damage <= 0) this._lifePoints -= 1;
    if(this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength as number);
  }

  levelUp(): void {
      
  }


  static generateRandomValue(): number {
    return Math.floor(Math.random() * 10) + 1;
  }

}