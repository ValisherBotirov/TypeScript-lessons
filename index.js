"use strict";
console.log("Hello TypeScript");
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// const person1 = new Person("Valisher",25)  // => Abstact classlardan obekt yaratilmaydi. Ular faqat voris olish uchun
class Teacher extends Person {
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }
    fetchAge() {
        return `${this.name} is ${this.age} years old`;
    }
}
const teacher1 = new Teacher("Jon", 20, "Math");
console.log(teacher1);
console.log(teacher1.fetchAge());
//# sourceMappingURL=index.js.map