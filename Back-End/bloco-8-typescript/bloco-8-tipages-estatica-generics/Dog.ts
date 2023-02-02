interface Dog {
  name: string,
  age: number,
  specie: string,
  color: string,
};

class Dog {
  constructor(name: string, age: number, specie: string, color: string) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.specie = specie;
  }

  latindo():string {
    return `O Cachorro ${this.name} esta latindo`
  };
}