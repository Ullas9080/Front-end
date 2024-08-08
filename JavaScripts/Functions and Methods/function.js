// Function
// function myName()
// {
//     console.log("My name is Ullas")
// }
// myName()
// myName()

// function add(num1,num2)
// {
//     add=num1+num2
//     console.log(add)
//     return add
// }
// add(10,20)
// function sum(x,y)
// {
//     add=x+y
//     console.log(add)
//     return add
// }
// sum(10,20)
// sum(20,390)
// function sum(x,y)
// {
//     add=x+y
//     console.log(add)
//     return add
//     console.log("Helloworld")
// }
// sum(10,20)
// sum(20,390)
// Arrow function
// const arrowadd=(a,b)=>
// {
//     console.log(a+b)
// }
// arrowadd(10,30)

// const multiple=(a,b)=>
// {
//     return a*b
// }
// console.log(multiple(10,620))
// const hello=()=>
// {
//     console.log("HelloWorld")
// }
// hello()
// const h=()=>console.log("Hello world")
// h()
// function string(name)
// {
// let i
//  count=0
//  for( i of name)

//  {
//      if (i==="a"||i==="e"||i==="i"||i=="o"||i==="u")
//      {
//         count++
//      }
//      console.log(i)
//  }
//  console.log("The vowels are")
//  console.log(count)
// }
// let name=prompt("Enter a string value");
// string(name.toLowerCase());
// const string=(name)=>
// {

//     let i=0
//     count=0
//     for (i of name)
//     {
//       console.log(i)
//     {
//         if (i==="a"||i==="e"||i==="i"||i=="o"||i==="u")
//         count++
//     }
// }
//      console.log("Vowels count are")
//     console.log("Count=",count)
// }
// let name=prompt("Enter a string vlaue")
// string(name.toLowerCase())
//for Eachloop
// let a=["roman","reigns","captain"]
// a.forEach((upper)=>
// {
//    console.log(upper.toUpperCase()) 
// })
//function array(){
    //     let a=["roman","reigns","captain"]
    //     for (let i of a)
    //     {
    //         console.log(i.toUpperCase())
    //     }
    // }
    // array()
    //for Eachloop
// let a=["roman","reigns","captain"]
// a.forEach((upper,idx,a)=>
// {
//    console.log(upper.toUpperCase(),idx,a) 
// })
// let array=[1,2,3,4,5,6,7,8,9]
// // array.forEach((square)=>
// // {
// //  let sum=square*square;
// //  console.log(`${square} =`,sum)
// // })
//  for (let i of array)
//  {
//      console.log(i*i)
//  }

//Map
//It is similar to foreachloop but main diiference it create new
//variable 
// let array=[12,34,5,5,67,8,89]
// let a=array.map((num)=>
// {
//     console.log(num)
// })
//filter
// let array=[12,33,45,66,78,89,90,45,67]
// // let a=array.filter((num)=>
// // {
// //   console.log(num%2===0)
// //   return num%2===0
// // })
// // console.log(a)
// let a=array.filter((num)=>
// {
//   console.log(num>40)
//   return num>40
// })
// console.log(a)
//Reduce it will add sum of array
//[;let array=[10,20,3,4,5,6,78]
// let output=array.reduce((re,calc)=>
// {
//     return re+calc
// })
// console.log(output)
// let student=[10,20,90,98,99,57,45,92]
// // let a=student.filter((result)=>
// // {
// //     return result>90
// // })
// // console.log(a)
// student.filter((result)=>
// {
//   console.log(result>90)
// })
//let n=prompt("Enter the number")
// let arr=[]
// // for(let i =0;i<n;i++)
// // {
// // let a=prompt(`Enter ${n} values ==`)
// // for(let j=0;j<n;j++)
// // {
// //     arr[a]=a
// // }
// // }
// for(let i=1;i<n;i++)
// {
//     arr[i]=i
// }
// console.log(arr)
// let sum=arr.reduce((res,calc)=>
// {
//     return res+calc
// })
// console.log("Sum",sum)
// let fact=arr.reduce((res,calc)=>
// {
//     return res*calc
// })
// console.log("Fact",fact)
// let score=[1,3,45,67,89,90]
// const sum=score.reduce((add,sum)=>
// {
//     return add+sum
// }
// )
// console.log(sum)
// let userinput=[]
// let length=prompt("Enter the length of array")
// for (let i=0;i<length;i++)
// {
// let name=prompt("Enter the string value")
// userinput.push(name)
// }
// console.log(userinput)