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
let cityWeather = null;

searchBtn.addEventListener('click', (e) => {
  (async function() {
    let data = await apiHandler.getWeatherData(city.value);
    cityWeather = objectMaker.returnObject(data);
    let tempUnit = 'Farenheit';
    console.log(data);
    console.log(cityWeather);

    displayController.removeAllChildren(weatherInfo);
    displayController.displayTemperature(cityWeather, weatherInfo, tempUnit);

    displayController.displayTempChangeBtn(weatherInfo, 'Celsius');
  })();
});

document.addEventListener('click', (e) => {
  if (e.target.className === 'temp-btn') {
    displayController.removeAllChildren(weatherInfo);

    let btnText = e.target.innerText;
    let tempUnit = btnText.includes('Celsius') ? 'Celsius' : 'Farenheit';
    console.log(tempUnit);
    displayController.displayTemperature(cityWeather, weatherInfo, tempUnit);
    if (tempUnit === 'Celsius') {
      displayController.displayTempChangeBtn(weatherInfo, 'Farenheit');
    } else {
      displayController.displayTempChangeBtn(weatherInfo, 'Celsius');
    }
  }
});

