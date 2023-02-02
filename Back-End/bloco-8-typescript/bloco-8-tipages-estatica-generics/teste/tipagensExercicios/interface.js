"use strict";
;
let teacher = {
    firstName: "John",
    lastName: "Doe",
    subject: "Matemática",
    fullName() {
        return this.firstName + " " + this.lastName;
    },
    sayHello() {
        return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
    }
};
