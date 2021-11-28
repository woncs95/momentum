const clock = document.querySelector("#clock");

function showTime(){
const date = new Date();
const hours = String(date.getHours()).padStart(2,"0");
const minutes = String(date.getMinutes()).padStart(2,"0");
const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

setInterval(showTime, 1000);