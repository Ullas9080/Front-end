const display=document.querySelector('.content-container')
 for(let i=0;i<display.length;i++)
 {
    display[i].addEventListener("click",()=>
    {
this.classlist.toggle('active')
    })
 }