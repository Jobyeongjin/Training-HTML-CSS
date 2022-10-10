// https://home.openweathermap.org/ 
// -> Weather API

const API_KEY = '32d6259a115d7c44bd009ece438ecae9';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const weather = document.querySelector('#weather span:first-child');
    const city = document.querySelector('#weather span:last-child');
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main}`;
    console.log(data)
  });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);