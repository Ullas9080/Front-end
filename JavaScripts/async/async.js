// const hello=()=>
// {
//     console.log("Hello world")
// }


// const { compose } = require("async")

// const { log } = require("async")

// const { log } = require("async")

// setTimeout(hello,30000)
// console.log("1")
// console.log("2")
// console.log("3")

// setTimeout(()=>
// {

//     console.log("hello")
// },4000)

// console.log("4")

// const sum=(x,y)=>
// {
//  console.log(x+y)
// }

// const calc=(x,y,summreturn)=>
// {
//     summreturn(x,y)
// }
// sum(1,2)
// calc(2,4,(sum)
// const data = (data1, data2) => {
//     setTimeout(() => {
//         console.log(`data ${data1}`)
//         if (data2) {
//             data2()
//         }
//     }, 5000
//     )
// }
// data(1, () => {
//     data(2)
// })

// const person1 = (name,num ,personcall ) => {
//     setTimeout(() => {
//         console.log(`Hello i am person ${num}-> ${name}`)
//         if (personcall) {
//             personcall()
//         }
//     }, 2000)
// }

// person1("Ullas", 1,() => {
//     console.log("getting person 2... ")
//     person1("Thilak", 2,() => {
//         console.log("getting person 3... ")
//         person1("Nihar", 3,() => {
//             console.log("getting person 4... ")
//             person1("Prashid", 4,() => {
//                 console.log("getting person 5... ")
//                 person1("Muthuraj", 5,() => {
//                     console.log("getting person 6... ")
//                     person1("Abhi", 6,() => {
//                         console.log("getting person 7... ")
//                         person1("Srikant", 7,() => {
//                             console.log("getting person 8... ")
//                             person1("Dhanush",8)
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })


// const college1 = (name, callback) => {
//     console.log(`College name->${name}`)
//     if (callback) {
//         callback();
//     }
// }

// const college2 = (name, callback) => {
//     console.log(`College name->${name}`)
//     if (callback) {
//         callback();
//     }
// }

// const college3 = (name, callback) => {
//     console.log(`College name->${name}`)
//     if (callback) {
//         callback();
//     }
// }

// const college4 = (name, callback) => {
//     console.log(`College name->${name}`)
//     if (callback) {
//         callback();
//     }
// }
// const college5 = (name, callback) => {
//     console.log(`College name->${name}`)
//     if (callback) {
//         callback();
//     }
// }

// const college6 = (name, callback) => {
//     console.log(`College name->${name}`)
//     if (callback) {
//         callback();
//     }
// }

// college1("Bmsccm", () => {
//     setTimeout(() => {
//         console.log(`Calling College 2 ${college2.name}`)
//         college2("Aps", () => {
//             setTimeout(() => {
//                 console.log(`Calling College 2 ${college3.name}`)
//                 college3("Rv", () => {
//                     setTimeout(() => {
//                         console.log(`Calling College 2 ${college4.name}`)
//                         college4("Jain", () => {
//                             setTimeout(() => {
//                                 console.log(`Calling College 2 ${college5.name}`)
//                                 college5("Nationl college", () => {
//                                     setTimeout(() => {
//                                         console.log(`Calling College 2 ${college6.name}`)
//                                     }, 2000)
//                                     college6("BNM")
//                                 })
//                             })
//                         },2000)
//                     },2000)
//                 }, 2000)

//             }, 2000)

//         }, 2000)

//     }, 2000)

// })

// new Promise((resolve, reject) => {

//         return 10 > 30 ? resolve(console.log(true)):reject(console.log(false),false);

// })

// const anotherPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('this is the eventual value the promise will return');
//     }, 300);
//   });

// anotherPromise.then(value => { console.log(value) })


// const Promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         return 10 < 30 ? resolve(console.log(true)):reject(false);

//     },3000)
// })



// let icecream =
// {
//     fruits: ["Strawberry", "grapes", "banana", "apple"],
//     liquid: ["water", "ice"],
//     holder: ["cone", "cup", "stick"],
//     toppings: ["chocolate", "peanuts"]
// };
// let random=Math.floor(Math.random() *2)


// let shop_open = "";

// let shop_close="";

//  if (random > 0 && random <=1)
//  {
//     shop_open=true
//  }
// else
// {
//     shop_close=false
// }


// let order = (time, works) => {
//     return new Promise((resolve, reject) => {
//         if (shop_open === true) {
//             setTimeout(() => {
//                 resolve(works())
//             }, time);

//         }
//         else {
//             reject("Sorry we are closed")
//         }
//     })
// }

// order(2000, () => {
//     console.log(`${icecream.fruits[2]}`)
// })

// const order = (time, works) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if (shop_open === true ) {
//          console.log("shop is open")
//          res(works())
//             }
//             else{
//                 rej("sorry order is reject")
//             }
//         }, time)
//     })
// }
//  order(2000,()=>
//  {
//     console.log(`${icecream.fruits[3]} was confirmed`)
//  })
// .then(()=>
// {
//     console.log(`Order has been dispatced`)
// })
// .catch((err)=>
// {
//     console.log(err,`Please try again `)
// })

// document.querySelector('p').innerHTML=order(2000,()=>
// {
//    icecream.fruits[3]
// })
// .then(()=>
// {
//   `Order has been dispatced`
// })
// .catch((err)=>
// {
//   `Please try again `
// })

// let Person1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Success")
//         }, 2000);
//     })
// }

// const Person2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Success")
//         }, 3000);
//     })
// }
// const Person3 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Success")
//         }, 2000);
//     })
// }
// const Person4 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Success")
//         }, 6000);
//     })
// }
// const Person5 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Success")
//         }, 5000);
//     })
// }

// console.log("Scanningg person1 data....");
// Person1().then((res) => {
//     console.log(res)
//     console.log("Scanningg person2 data....");
//     Person2().then((res) => {
//         console.log(res)
//         console.log("Scanningg person 3data....");
//         Person3().then((res) => {
//             console.log(res)
//             console.log("Scanningg person4 data....");
//             Person4().then((res) => {
//                 console.log(res)
//                 console.log("Scanningg person5 data....");
//                 Person5().then((res) => {
//                     console.log(res)
//                 })
//             })
//         })
//     })

// })

// const Person = (name,age) => {
//     this.name=name
//     this.age=age
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hello Person")
//             console.log(name ,age)
//         },2000)
//     })
// }  

// Person("ullas",19).then((res)=>
// {
//    console.log(name ,age)
//    console.log(res)

// Person("ullas",19).then((res)=>
// {
//    console.log(name ,age)
//    console.log(res)
// }) 
// })
// operation1(0).then(() => {
//     console.log("Your operation is correct")
// }).catch(() => {
//     console.log("Your operation is wrong")

// })
// operation2(10).then(() => {
//     console.log("Your operation is correct")
// }).catch(() => {
//     console.log("Your operation is wrong")
// })
// operation3(100).then(() => {
//     console.log("Your operation is correct")
// }).catch(() => {
//     console.log("Your operation is wrong")
// })

// function college1()
// {

// }
// const University = (open) => {

//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (open=== true) {

//                 resolve("University is open ")
//             } else {
//                 reject("University is close")
//             }
//         },3000)
//     })
// }

// const College = () => {
//     const open = true
//     new Promise((resolve, reject) => {

//         setTimeout(() => {
//             if (open === true) {

//                 resolve("College is open ")
//             } else {
//                 reject("College is close")
//             }
//         },2000)
//     })
// }

// const Admission = () => {
//     const open = true
//     new Promise((resolve, reject) => {

//         setTimeout(() => {
//             if (open === true) {
//                 resolve("Admission is open ")
//             } else {
//                 reject("Admission is close")
//             }
//         },4000)
//     })
// }

// async function Student()
// {
//     try {
//         const university=await University(false)
//           console.log( university)
//     } catch (error) {
//      console.log(error)   
//     }
// }
// Student()

// function operation1(a) {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (a > 10) {
//                 resolve("A is greater")
//             } else {
//                 reject("A is not greater")
//             }
//         }, 2000)
//     })

// }


// function operation2(a) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (a > 10) {
//                 resolve("succes")
//             } else {
//                 reject("wrong")
//             }
//         }, 4000)
//     })
// }


// function operation3(a) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (a > 10) {
//                 resolve("Done")
//             } else {
//                 reject("failed")
//             }
//         }, 2000)
//     })

// }

// (async function () {
//     // try {
//     //    await operation1(100)
//     //    await operation3(1)
//     //    await operation2 (100)
//     // } catch (error) {
//     //     console.error(error)
//     // }
//     console.log(await operation1(12))
//     await operation2(12)
//     console.log(await operation3(1))
// })
// dochoice()
// async function dochoice1() {

//     console.log(await operation3(1))
// }
// dochoice1()
// async function dochoice2() {


// }
// dochoice2()


// setTimeout(()=>
// {
//     console.log("Ullas")
// },4000)

// setInterval(()=>
// {
//     console.log("Ullas")
// },2000)

// let h1=document.querySelector('h1')

// // const stop=()=>
// // {
// //     setTimeout(()=>
// // {
// //     h1.innerHTML="JavaScripts"
// // console.log("Changed")
// // },4000)

// // }

// let stop=document.querySelector('#stop')

// // button.addEventListener('click',()=>
// // {
// //     stop()
// // })

// let start=document.querySelector('#start')



// start.addEventListener("click",()=>
// {
//   let display=setInterval(()=>
//     {
//     h1.innerHTML="JavaScripts"
//     console.log("Changed");
//     },2000)
// })

// stop.addEventListener("click",()=>
// {
// clearInterval(display)
// })
// let Changed = ""

// let color = "0123456ABCDE"
// let hastag = "#"

// for (let i = 0; i < 6; i++) {
//     Changed = hastag += color[Math.floor(Math.random() * color.length)]
// }



// let body = document.querySelector('body')

// let start = document.querySelector("#start")

// let backgroundColor = ""
// start.addEventListener('click', () => {
//     startChangedColor()
// })
// let startChangedColor = function () {


//         body.style.backgroundColor = Changed


//     }

// const getCode=(callback)=>
// {
//     const request=new XMLHttpRequest()
// request.addEventListener('readystatechange',()=>
// {
//     if(request.readyState===4 && request.status===200)
// {
//   let data=JSON.parse(request.responseText)
//     callback(undefined, data)  
// }
// else
// {
//     console.log("Could not fetch Data");
// }
// })
// request.open('GET','https://jsonplaceholder.typicode.com/todos/1')
// request.send()

// }

// getCode((err,data)=>
// {
//     if(err)
//     {
//         console.log(err);
//     }
//     else{
//         console.log(data);
// //     }
// // })

// const getTodo = (resource) => {
//     return new Promise((resolve, reject) => {

//         const request = new XMLHttpRequest()

//         request.addEventListener('readystatechange', () => {
//             if (request.readyState === 4) {
//                 let data = JSON.parse(request.responseText)
//                 resolve(data)
//             }
//             else if(request.readyState===400){
//                 reject(console.error('Sorry could not fetch data'))
//             }
//         })


//         request.open('GET', resource)
//         request.send()

//     })

// }


// getTodo('Todo1.json').then((data)=>
// {
//     console.log('Promise resolved:',data);
//    return getTodo('Todo.json').then((data)=>
//    {
// console.log(data);
//    })
// }).catch((err)=>
// {
// console.error("Some error ");
// })




// getTodo('Todo.json', (data) => {
//     console.log(data);
//     getTodo('Todo1.json', () => {
//         console.log(data);
//     })
// })


// const getTodo = async () => {

// const response = await fetch('Todo.json')
// const data= await response.json();
// console.log(data);
// }

// getTodo()
// fetch('Todo.json').then((response)=>
// {
// console.log('Resolved :',response);
// response.json()
// .then((data)=>
// {
// console.log(data)
// })
// }).catch((err)=>
// {
// console.log('Rejected',err);

//  })

// async function getCode() {
//     const data=await fetch('Todo.json')
//     console.log(await data.json());
// }
// getCode()

// const Person = {
//     name: "Ullas",
//     favfood: "Briyanni",
//     username: function () {
//         console.log(`Hi i am ${this.name}`);
//     },
//     food: function () {
//         console.log(`My fav food is ${this.favfood}`)
//     }
// }

// Person.username()
// Person.food()

// function car(car1,car2,car3)
// {
//     this.car1=car1
//     this.car2=car2
//     this.car3=car3
//     console.log(`Car1 :${this.car1} , Car2 :${this.car2} , Car3 :${this.car3}`);
// }

// const Car=new car("BMW","AUDI","BENZ")
// console.log(Car.car2);

// class Person
// {
//     constructor(name,age,gender)
//     {
//         this.name=name
//         this.age=age
//         this.gender=gender
//     }

//      name()
//      {
//         console.log(`Name of the Person1 : ${this.name}`)
//      }
//      age()
//      {
//         console.log(`Age of the Peron1 : ${this.age}`);
//      }
//    gender()
//      {
//         console.log(`Gender : ${this.gender}`);
//      }
// }


// const p1erson1=new Person('Ullas','20','Male')
// console.log(p1erson1.name())


async function Pokemon()
{
try {
   
   const pokemonname=document.querySelector('#text').value.toLowerCase()

   const resource=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`)
   
   const data= await resource.json()
   let img=document.querySelector('img')
   console.log(img);
   const pokemonimage=data.sprites.front_default
   // console.log(pokemonimage);
   img.src=pokemonimage


} catch (error) {
   console.error("please enter valid name")
}


}

const button=document.querySelector('#search')
button.addEventListener('click',()=>
{
   Pokemon()
})





















































































































































































































































































































