"use strict";
console.log("Hello TypeScript");
class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    info() {
        return "Hello";
    }
}
class Teacher extends Person {
    constructor(name, surname, age, group) {
        super(name, surname, age);
        this.group = group;
    }
}
const person1 = new Person("Valisher", "Botirov", 22);
console.log(person1);
//# sourceMappingURL=index.js.map