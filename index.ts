console.log("Hello TypeScript")

// string
// let a:string = "salom"
// a = "valisher"

// number
// let b:number = 20
// b = 2

// boolean =======================================================
// let c:boolean = true
// c = false

// null    =====================================================================
// let n:null = null
// n = null

//use obj ==============================================================================
// let obj:{name:string,age:number|null} = {name:"",age:null}
//
// obj.name = "Valisher Botirov"
// obj.age = 21
//
// console.log(obj)

// use object interface types    ============================================================
// interface PersonType{
//     name:string,
//     job:string,
//     age:number
// }
// let person:PersonType = {
//     name:"Valisher",
//     job:"Developer",
//     age:21
// }
// person.age = 22
// person.job = "Businessman"
// console.log(person)


//Functions =========================================================================
// function calc (a:number,b:number):number{
//     return a+b
// }
// console.log(calc(1,5))
//
// function giveName(name:string):void{
//     console.log(name)
// }
// giveName("Valisher Botirov")
//
// function fetchError():never{
//     throw new Error("New Error")
// }
// fetchError()


//Signature functions =================================================================

// let functionName:(a:number,b:number)=> number
//
// functionName = function(a:number,b:number){
//     return a+b
// }
//
// functionName(2,3)


//Typelarni change qilish

//Unknown types ==================================================================
// let a:unknown = 20.202
// let b :number = <number>a  //1-usul
// let c:number = a as number  // 2-usul
// let d:number = (a as number)
// console.log((<number>a).toFixed(2))

// Union type ================================================================
// let a:number|string|boolean
// a = 21
// a = "Valisher"
// a = true

//Literal type ==================================================================
// let size :'sm'|'lg'|'md'
// size = "valisher" /// =====>  error | big mistake
// size = 'lg'
// size = 'md'

//Alias types  ==============================================================
// type TypeSize = "sm" | "md" | "lg" | number
// let size:TypeSize = "sm"
// size = "md"
// size = "lg"
// size = 32
//
// type TypeObj = {name:string,age:number} | {fullData:string}
// let obj:TypeObj = {name:"Valisher",age:21}
// obj = {fullData:"Valisher 21 yoshda"}
// obj = {name :"John" , age:20}
// console.log(obj)
//
// type TypeObj2 = {job:string,position?:string} & { age:number }
// let obj2:TypeObj2 = {job:'Developer',age:22}
// obj2 = {
//     job:"Developer",
//     position:"CEO",
//     age:25
// }
//
// if("age" in obj2){
//     console.log(`He is ${obj2.age} years old`)
// }else{
//     console.log("Not age")
// }


//Use Array  =============================================================
// let arr:number[] = [1,2,3,4]
// arr.push(3)
// arr = [2,3,4,5,]
//
// let arr2:Array<number> = [2,3,43,4,5]
// arr2 = [3,4,5,5,6,]
//
// let arr3:(number | string | boolean)[] = [12,"a",true]
// arr3 = ["a",32,false]
//
// let arr4:Array<number|string> = [12,3,3,'dc','sd']
// arr4.push(3)
// arr4.push("w")
// arr4.push(null) // use this error

//tuples =================================================
// let f:[number,string]
//
// f = [1,"s"]
// f = [2,"a"]

//Enums | Qayta hisoblashlar ================================
// enum Gender{
//     male,
//     female
// }
//
// console.log(Gender)
// console.log(Gender.male)
// console.log(Gender[0])


//Class and OOP ===========================================
// class Person{
//     _name:string
//     _age:number
//     constructor(name:string,age:number) {
//         this._name = name
//         this._age = age
//     }
//
//     static isUserLogin:boolean = false
//
//     userInfo():string{
//         return `${this._name} is ${this._age} years old`
//     }
//
//     changeAge(value:number):void{
//         this._age+=value
//     }
//
//     get GetAge():number{
//         return this._age
//     }
//     set age(val:number){
//         this._age = val
//     }
// }
//
//
// const person1:Person = new Person("Valisher",22)
// const person2:Person = new Person("John",30)
//
// console.log(Person)
// // person1.changeAge(10)
// person1._age = 10
// console.log(person1.GetAge)
// console.log(person2)

// Class inheritance =============================================
// class Person{
//     _name:string
//     _surname:string
//
//     constructor(name:string,surname:string) {
//         this._name = name
//         this._surname = surname
//     }
//
//     myInfo():string{
//         return `Hello my name is ${this._name}`
//     }
// }
//
//
// class Student extends Person{
//     _group:string
//     constructor(name:string,surname:string,group:string) {
//         super(name,surname);
//         this._group = group
//     }
//
//     myInfo(): string {
//         return `${super.myInfo()} and my group is ${this._group}`;
//     }
// }
//
// class Teacher extends Person{
//     _lessons:Array<string>
//     constructor(name:string,surname:string,lessons:string[]) {
//         super(name,surname);
//         this._lessons = lessons
//     }
//
//     teacherInfo():string{
//         return `${super.myInfo()} and i teach ${this._lessons} `
//     }
// }
//
// const user1:Person = new Person("Valisher","Botirov")
// const student1 = new Student("John","Jony","315-21")
// const teacher1 = new Teacher("Azam","Abrorov",["Maths","JS","TypeScript"])
// console.log(user1)
// console.log(student1)
// console.log(teacher1)
// console.log(student1.myInfo())
// console.log(teacher1.teacherInfo())

// Interface and types  =============================================================
 interface IPerson{
    name:string;
    surname:string;
 }

 interface IPerson{
     age?:number;
     info?():string
 }

 interface ITeacher extends IPerson{
    group:string
 }

 class Person implements IPerson{
     name:string
     surname:string
     age:number
     constructor(name:string,surname:string,age:number) {
         this.name = name
         this.surname = surname
         this.age = age
     }

     info(): string {
        return "Hello"
     }
 }

 class Teacher extends Person implements ITeacher{
    group:string
     constructor(name:string,surname:string, age:number,group:string) {
         super(name,surname,age);
         this.group = group
     }
 }

 const person1 = new Person("Valisher","Botirov",22)
console.log(person1)

