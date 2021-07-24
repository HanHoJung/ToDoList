
const API_KEY = "f33d0c4dfee73ebfb0858edb17af5437";
const weather = document.querySelector(".footer-layout");  

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
     const str = `${data.name}, ${data.weather[0].main} / ${data.main.temp}`;
      weather.innerHTML = str;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);