const clock = document.querySelector("h2#clock");
const month =  document.querySelector(".month");
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

function getClock() {
  const date = new Date();
  month.innerText = String(date.getMonth()+1).padStart(2, "0");
  days.innerText = String(date.getDate()).padStart(2, "0");
  hours.innerText = String(date.getHours()).padStart(2, "0");
  minutes.innerText = String(date.getMinutes()).padStart(2, "0");
  seconds.innerText = String(date.getSeconds()).padStart(2, "0");
  
}


    
getClock();
setInterval(getClock, 1000);