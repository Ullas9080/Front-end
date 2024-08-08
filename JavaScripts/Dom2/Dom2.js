let attribute_p1=document.querySelector('p')
console.log(attribute_p1.getAttribute("class"))
attribute_p1.setAttribute("class","p1")
console.log(attribute_p1.getAttribute("class"))
attribute_p1.setAttribute("id","p11")
console.log(attribute_p1.getAttribute("id"))
let button=document.querySelector('.button')

let visible=document.querySelector('visible')
visible.onclick=function()
{
    button.style.visibility="hidden"
}
let button=document.querySelector("button")
button.innerText="Click here"
console.log(button)
let div=document.querySelector("div")
let add=document.querySelector(".add")
add.onclick=function()
{
    div.remove
}
let button=document.createElement('button')
button.innerText='Click Here'
button.style.backgroundColor="red"
button.style.color="white"
document.querySelector("body").prepend(button)
let content=document.querySelector('.para')
content.setAttribute("class","newpara")
let button=document.querySelector("button")
button.onclick=function(){
    content.classList.add("para")
}
