interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
};

// let employee: Employee = {
//   firstName : "John",
//   lastName: "Doe",
//   fullName(): string {
//       return this.firstName + " " + this.lastName; // usamos o "this" para acessar as propriedades da interface
//   }
// }

// employee.firstName = 10;  // Error: Type "number" is not assignable to type "string"

interface Teacher extends Employee {
  subject: string;
  sayHello(): string;
}

let teacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    subject: "Matemática",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    },
    sayHello(): string {
        return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
    }
}