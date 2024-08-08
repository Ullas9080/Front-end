let openBtn=document.getElementById('open-btn');
let modalcontainer= document.getElementById('modal-container')
let closeBtn= document.getElementById('close-btn')

openBtn.addEventListener("click",()=>
{

modalcontainer.style.display="block";

})
closeBtn.addEventListener("click",()=>
{
    
    modalcontainer.style.display="none";
})

window.addEventListener("click",(e)=>
{
if(e.target === modalcontainer)
{
    modalcontainer.style.display="none"
}
})