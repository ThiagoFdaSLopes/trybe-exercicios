abstract class character {
  constructor(private name: string) {}
  abstract talk(): void
  abstract specialMove(): void
  static create(char: character): void {
    char.talk();
    char.specialMove();
  }
}

class MeleeCharacter extends character {
  constructor(private _name: string, private _specialName: string) {
    super(_name);
  }

  talk() {
    console.log(`O ${this._name} Disse: "Sabias Palavras"`)
  }

  specialMove() {
    console.log(`O resultado do seu poder ${this._specialName} passou dos limites`)
  }
}

class LongRangeCharacter extends character {
  constructor(private _name: string, private _specialName: string) {
    super(_name);
  }

  talk() {
    console.log(`O ${this._name} Disse: "A distancia permite erros"`)
  }

  specialMove() {
    console.log(`Voce causou a destruicao com seu poder ${this._specialName}`)
  }
}

const yoshi = new MeleeCharacter('Yoshi', 'Super Dragon');

character.create(yoshi)