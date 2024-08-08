const startStopBtn=document.querySelector("#starbutton")
const resetbtn=document.querySelector("#stopbutton")

//variable for time values
let seconds=0;
let minutes=0;
let hours=0;

// Variable for leading zero

let leadingSeconds=0;
let leadingMinutes=0;
let leadingHours=0;

let timerinterval=null;
let timerstatus= "stopped";

function stopwatch()
{

    seconds++

if(seconds/60 ===1)
{
    seconds=0
    minutes ++;

    if(minutes /60 === 1)
    {
        minutes=0;
        hours++
    }
}

if(seconds <10 )
{
    leadingSeconds="0" + seconds.toString();
}
else{
    leadingSeconds=seconds;
}
if(seconds <10 )
{
    leadingMinutes="0" + minutes.toString();
}
else{
    leadingMinutes=minutes;
}
if(seconds <10 )
{
    leadingHours="0" + hours.toString();
}
else{
    leadingHours=hours;
}
let displaytimer = document.getElementById('timer').innerText= leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// window.setInterval(stopwatch,1)

startStopBtn.addEventListener("click",function()
{
if(timerstatus==="stopped")
{
    timerinterval=window.setInterval(stopwatch,1000);
    document.getElementById("startStopBtn").innerHTML=`<i class='bx bx-pause'>id="pause"</i> `;
    timerstatus="started"
}
else{
    window.clearInterval(timerinterval);
    document.getElementById('startStopBtn'.innerHTML=`<i class='bx bxs-stopwatch' id="play"></i>`)
    timerstatus="stopped"

}
})