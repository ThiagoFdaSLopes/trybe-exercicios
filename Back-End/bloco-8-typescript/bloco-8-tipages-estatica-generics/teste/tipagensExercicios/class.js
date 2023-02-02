"use strict";
// usamos a palavra reservada class para definir uma classe
class Person {
    // aprenderemos mais sobre o construtor na próxima seção
    // considere-o como uma função utilizada para construir um objeto a partir da classe,
    // nele recebemos todos os dados necessários para construir um objeto de pessoa
    constructor(name, birthDate, age) {
        // usamos o this para acessar as propriedades da instância da classe,
        // ele representa a própria instância que estamos criando
        // atribuímos o valor do parâmetro recebido a propriedade da instância da classe
        this.name = name;
        this.birthDate = birthDate;
        this.age = age;
    }
    speak() {
        console.log(`${this.name} está falando.`);
    }
    ;
    eat() {
        console.log(`${this.name} está comendo.`);
    }
    ;
    walk() {
        console.log(`${this.name} está andando.`);
    }
    ;
}
const person1 = new Person('Thiago', new Date("1996-07-01"), 26);
console.log(person1);
person1.speak;
