// // const student={
// //     name:"Ullas",
// //    age:19,
// //    place:"Bangalore"
// // }
// // console.log(student.age)
// // const person={
// //     name:["Ullas","ABC"],
// //     age:19,
// //     bio()
// //     {
// // console.log(`${this.name[1]} is ${this.age} old`)
// //     }
// // }
// // console.log(person.bio())

// const employee={
//     tax()
//     {
//         console.log("30%")
//     }
// }

// let karanarjun1={
//     salary:50000
// }
// let karanarjun2={
//     salary:50000
// }
// let karanarjun3={
//     salary:50000
// }
// let karanarjun4={
//     salary:50000
// }
// let karanarjun5={
//     salary:50000
// }
// let karanarjun6={
//     salary:50000
// }

// karanarjun1.__proto__=employee
// karanarjun2.__proto__=employee
// karanarjun3.__proto__=employee
// karanarjun4.__proto__=employee
// karanarjun5.__proto__=employee
// employee.__proto__=karanarjun6

// let arr1=[1,2,3,45,67,89]
// arr1.push(10)
// console.log(arr1.push(234))
// employee.__proto__=arr
// karanarjun1.__proto__=arr

//class
// class Car
// {
//     start(num1,num2)
//     {
//        return num1+num2
//     }

//     stop()
//     {
//         console.log("Bye bro")
//     }

//     sum(num)
//     {
//         this.num=num
//         console.log(this.num)
//     }
// }

//  toyata=new Car()
// console.log(toyata.start(12,45))
// console.log(toyata.sum(12))


// class Car {

//  constructor(brand)
//  {
//     console.log("This is Construotr")
//     this.brand=brand
//     console.log(`Name os Constructor is ${this.brand}`)
//  }

//     start() {
//         console.log("Car has Started")
//     }
//     stop() {
//         console.log("Car has Stop")
//     }
//    setBrand(brand)
//    {
//     this.brand=brand
//     console.log(`Name os this Brand is ${this.brand}`)
//    }
// }

// let car=new Car("ABC")
// console.log(car )
// car.setBrand("ullas")

// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     heel() {
//       return this;
//     }
// };

// console.log('this in object method', person.heel());

// const student={
// firstName:"Ullas",
// lastName:"Gowda",
// bio()
// {
//     return this
// }
// }
// console.log(student.bio())

// const bio=()=>
// {
//     console.log("This is bio function",this)
// }q
// bio()

// const person1=
// {
//     person1_firstName:"Ullas",
//     person1_lastName:"Gowda",
//      bio()
//     {
// console.log(`person_firstName ${this.person1_firstName}  person_lastName ${this.person1_lastName}`)
//     }
// }
// function person2Name(name,Dod)
// {
// console.log(`person2_FirstName ${name} person2_SecondName ${Dod}`);
//  obj1 ={
//     name1:"ABC",
//     surname1:"DEF",
//     Dob1:"12-34-56",
//     bio1()
//     {
//       console.log(`${this.name1} ${this.Dob1} ${this.surname1}`);
//     }
// };

// }
// // console.log(person1.bio.call(person2Name("Vaibhav","KS")))
// person2Name('qw',23).call(obj1.bio1())


// class Parent
// {
// bio()
// {
//     console.log("Hello i am Parents of Child Class")
// }

// Status()
// {
//     console.log("I am a full stack developer")
// }
// }

// class Child extends Parent
// {
//     sleep()
//     {
// console.log("It's my sleeping Time")
//     }
// }
//  let parent=new Parent()
//  let child=new Child()

// class Sum{
// constructor(x,y)
// {
// this.x=x
// this.y=y
// }

// }
// class Addition extends Sum{
//     constructor(x,y)
//     {
//         super(x,y);
//       console.log("Addition of two number is",this.x+this.y)
//     }


// }
// class Subtraction extends Sum{
//     constructor(x,y)
//     {
//         super(x,y);
//       console.log(this.x-this.y)
//     }
// }
// class Multiplication extends Sum{
//     constructor(x,y)
//     {
//         super(x,y);
//       console.log(this.x*this.y)
//     }
// }
// class Divsion extends Sum{
//     constructor(x,y)
//     {
//         super(x,y);
//       console.log(this.x/this.y)
//     }
// }

// const sum=new Sum()
// const addition=new Addition(12,56)
// const division=new Divsion()
// const subtraction=new Subtraction()
// const multiplication=new Multiplication()

// console.log(`Addition of two number is ${addition}`)
// class person{
//     constructor(branch)
//     {
//     this.branch=branch
//         console.log("This is super function ",this.branch)
//     }
// }

// class employee extends person
// {
//     constructor(branch)
//     { super(branch);
//         // this.branch=branch
//     }

//     work()
//     {
//         console.log("Super Keyboard")
//     }
// }
//  let per = new person("Adarsh")
//  let emp= new employee("Ullas")
// console.log(emp.__proto__=per)

//Try catch
// try {
//   let a=10
//   let b="Ullas"
//   console.log(c-a)
// } catch (e) {
//   console.log(e)
// }

// class person
// {
// constructor(name,age,bio)
// {

//     this.name=name
//     this.age=age
//     this.bio=bio

//     console.log(`Person name -> ${this.name}
// Person age -> ${this.age}
// Person bio -> ${this.bio} `)
// }

// }

// let Person1=new person("Ullas",19,"Bangalore")
// let Person2=new person("Ullas",49,"Mysore")
// let Person3=new person("Ullas",89,"Delhi")
// let Person4=new person("Ullas",29,"Mumbai")

// class Sum{
//     constructor(x,y)
//     {
//         this.x=x
//         this.y=y
//         console.log()
//     }
//    add()
//    {
//   console.log(`Addition of ${this.x} and ${this.y} is ${ this.x+this.y}`)
//    }
//    sub()
//    {
//   console.log(`Subtraction of ${this.x} and ${this.y} is ${ this.x-this.y}`)
//    }
//    div()
//    {
//   console.log(`Multiplication of ${this.x} and ${this.y} is ${ this.x*this.y}`)
//    }
//    mul()
//    {
//   console.log(`Division of ${this.x} and ${this.y} is ${ this.x/this.y}`)
//    }
// }
//  choice="yes".toLowerCase()

// let sum=new Sum(12,49)
// sum.add()
// sum.sub()
// sum.mul()
// sum.div()

class Person {
    constructor(name,age) {
        this.name= name
        this.age = age

    }
    bio()
    {
        console.log("This is bio")
    }
}

class Teacher extends Person {
constructor(name,age,classstrength)
{
    super(name,age)
    this.classstrength=classstrength

}

}
class Student extends Teacher {

}



let person = new Person("Ullas", 19)
let teacher=new Teacher("Ullas",30,16)

console.log(`Name of person -> ${person.name}
Age of person -> ${person.age}`)


console.log(`Name of person -> ${teacher.name}
Age of person -> ${teacher.age}
classStrength ->${teacher.classstrength}`)
 let student=new Student()
 student.bio()












































