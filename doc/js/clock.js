//DOM Element access
const clock = document.querySelector("h2#clock");

//Get date
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes  = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `🕒${hours}:${minutes}:${seconds}🕒`;
}


getClock();
setInterval(getClock,1000);