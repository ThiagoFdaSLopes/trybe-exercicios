import Animal from "./animalClass";

export default class Bird extends Animal {
  fly() {
    console.log(`O ${this.name} Esta voando`);
  }
}

const bird = new Bird('Thiago', new Date(Date.parse('03/10/2015')))

const main = (animal: Animal) => {
  console.log(animal.age);
}

main(bird);
bird.fly()