import ApiHandler from './api_handler.js'
import ObjectMaker from './object_maker.js' 

let apiHandler = new ApiHandler();
let objectMaker = new ObjectMaker();

// let cityInput = document.querySelector('.city');
let searchBtn = document.querySelector(".search-btn");
let weatherInfo = document.querySelector('.weather-info');

searchBtn.addEventListener('click', (e) => {
  (async function() {
    let data = await apiHandler.getWeatherData(city.value);
    console.log(data);
    let cityWeather = objectMaker.returnObject(data);
    console.log(cityWeather);
    let temp = document.createElement('p');
    console.log(cityWeather.temp);
    temp.textContent = `${cityWeather.temp}`;
    weatherInfo.append(temp);
  })();
});