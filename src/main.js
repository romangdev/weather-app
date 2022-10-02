import ApiHandler from './api_handler.js'
import ObjectMaker from './object_maker.js' 
import DisplayController from './display_controller.js'
import DataManipulator from './data_manipulator.js'

let apiHandler = new ApiHandler();
let objectMaker = new ObjectMaker();
let displayController = new DisplayController();
let dataManipulator = new DataManipulator();

// let cityInput = document.querySelector('.city');
let searchBtn = document.querySelector(".search-btn");
let weatherInfo = document.querySelector('.weather-info');

searchBtn.addEventListener('click', (e) => {
  (async function() {
    let data = await apiHandler.getWeatherData(city.value);
    let cityWeather = objectMaker.returnObject(data);
    let tempUnit = 'Farenheit';
    console.log(data);
    console.log(cityWeather);

    displayController.removeAllChildren(weatherInfo);
    displayController.displayTemperature(cityWeather, weatherInfo, tempUnit);

    let tempBtn = document.createElement('button');
    tempBtn.classList.add('temp-btn');
    tempBtn.innerText = `Change to Celsius`;
    weatherInfo.appendChild(tempBtn);
  })();
});