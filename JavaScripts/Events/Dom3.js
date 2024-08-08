// // let ul=document.querySelector('ul')
// // let container=document.querySelector('.invisible')
// // console.log(ul)
// // console.log(ul.parentNode)
// // console.log(ul.parentElement.parentElement)
// // console.log(ul.childNodes)
// // console.log(ul.children)
// // ul.children[2].style.backgroundColor = "red"
// // ul.childNodes[1].style.backgroundColor = "blue"
// // console.log(ul.previousSibling)
// // console.log(ul.nextSibling)
// // console.log(container.childNodes)
// // const button2 = document.querySelector('.btn-2')

// // function alertbtn() {

// //     alert("Hello world")

// // }
// // button2.addEventListener("click", alertbtn);

// // const button3 = document.querySelector(".btn-3")

// // const box3 = document.querySelector(".box-3")

// // function colorchange() {

// //     box3.style.backgroundColor = "blue"

// // }

// // button2.addEventListener("click",colorchange);
// // let reveal_button=document.querySelector('.reveal-btn')
// // let hidden_button=document.querySelector('.hidden-content')
// // let body=document.querySelector('body')
// // function reveal()
// // {
// //     if(hidden_button.classList.contains('hidden-content'))
// //     {
// //         hidden_button.classList.remove('hidden-content')
// // }
// //     else{
// //         hidden_button.classList.add('hidden-content')
// //     }
// // }
// // function color()
// // {
// // if(body.classList.contains('body'))
// // {
// //     body.classList.remove('body')
// // }
// // else{
// //     body.classList.add('body')
// //     body.style.backgroundColor='darkblue'
// // }
// // }
// // reveal_button.addEventListener("click",reveal)
// // reveal_button.addEventListener('click',color)
// // window.addEventListener("click",function()
// // {
// //     console.log(window)
// //     // alert(window)
// // },true)
// // document.addEventListener("click",function()
// // {
// //     console.log(document)
// //     // alert(document)
// // },true)
// // document.querySelector('.div2').addEventListener("click",function()
// // {
// //     console.log('Div 2')
// // // alert('Div 2')
// // },true)
// // document.querySelector('.div1').addEventListener("click",function()
// // {
// //     console.log('Div 1')
// //     // alert('Div 1')
// // },true)
// // document.querySelector('.btn-1').addEventListener("click",function(e)
// // {
// //     console.log(e.innerText="clicked!")
// //     // alert(e.innerText="clicked!")
// // },true)

// let football=document.querySelector(".football")
// let cricket=document.querySelector(".cricket")
// let basketball=document.querySelector(".basketball")
// let tennis=document.querySelector(".tennis")
// let sports=document.querySelector(".sports")
// // football.addEventListener("click",(e)=>
// // {
// //     console.log("Football Clicked!")

// //     let target=e.target;
// //     if(target.matches('li'))
// //     {
// //         target.style.backgroundColor='lightgrey'
// //     }
// // })

// // cricket.addEventListener("click",(e)=>
// // {
// //     console.log("Cricket Clicked!")

// //     let target=e.target;
// //     if(target.matches('li'))
// //     {
// //         target.style.backgroundColor='lightgrey'
// //     }
// // })

// // basketball.addEventListener("click",(e)=>
// // {
// //     console.log("BasketBall Clicked!")

// //     let target=e.target;
// //     if(target.matches('li'))
// //     {
// //         target.style.backgroundColor='lightgrey'
// //     }
// // })

// // tennis.addEventListener("click",(e)=>
// // {
// //     console.log("Tennis Clicked!")

// //     let target=e.target;
// //     if(target.matches('li'))
// //     {
        
// //         target.style.backgroundColor='grey'
// //     }
// // })
// sports.addEventListener("click",(e)=>
// {
// console.log(e.target.getAttribute('class')+' is clicked')
// let target=e.target
// // if (target.matches('li'))
// // {
// //     target.style.backgroundColor='red'
// // }
// if(target.matches('li')===sports.classList.contains('football'))
// // if(football.classList[1]==="FootBall")
// {
// football.style.backgroundColor="blue"
// }
// if(target.matches('li')===sports.classList.contains('cricket'))
// // if(football.classList[1]==="FootBall")
// {
// football.style.backgroundColor="red"
// }
// if(target.matches('li')===sports.classList.contains('basketball'))
// // if(football.classList[1]==="FootBall")
// {
// football.style.backgroundColor="blue"
// }
// if(target.matches('li')===sports.classList.contains('tennis'))
// // if(football.classList[1]==="FootBall")
// {
// football.style.backgroundColor="red"
// }
// }
// )
// console.log(sports.childNodes)