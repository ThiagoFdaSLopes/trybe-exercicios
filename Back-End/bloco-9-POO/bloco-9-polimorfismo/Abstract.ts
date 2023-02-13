abstract class Employee {
  constructor(public name: string) { }
  abstract MIN_SALARY: number
  abstract work(): void
}

class Instructor extends Employee {
  constructor(public name: string) {
    super(name); 
  }
  MIN_SALARY = 10000;
  work() { console.log(`${this.name} está auxiliando as pessoas estudantes em mentorias.`); }
}

class Specialist extends Employee {
  constructor(public name: string) {
    super(name); 
  }
  MIN_SALARY = 20000;
  work() { console.log(`${this.name} está ministrando uma aula ao vivo.`); }
}

class Facilitator extends Employee {
  constructor(public name: string) {
    super(name); 
  }
  MIN_SALARY = 50000;
  work() { console.log(`${this.name} está conduzindo um 1:1.`); }
}

const instructor = new Instructor('Victor');
const specialist = new Specialist('Gus');
const facilitator = new Facilitator('Silvinha');