import DataManipulator from './data_manipulator.js'

let data_manipulator = new DataManipulator();

export default class DisplayController {
  removeAllChildren = (weatherInfo) => {
    let child = weatherInfo.lastElementChild;
    while (child) {
      weatherInfo.removeChild(child);
      child = weatherInfo.lastElementChild;
    }
  }

  displayCity = (cityName, weatherInfo) => {
    let cityHeader = document.createElement('h1');
    cityHeader.innerText = `Weather in ${cityName.toUpperCase()}`;
    weatherInfo.appendChild(cityHeader);
  }

  displayTemperature = (cityWeather, weatherInfo, unit) => {
    let temp = document.createElement('p');
    if (unit === 'Farenheit') {
      let farenheit = data_manipulator.makeFarenheit(cityWeather.temp);
      temp.innerText = `${farenheit} °Farenheit`;
    } else {
      let celsius = data_manipulator.makeCelsius(cityWeather.temp);
      temp.innerText = `${celsius} °Celsius`;
    }
    weatherInfo.append(temp);
  }

  displayTempChangeBtn = (weatherInfo, unit) => {
    let tempBtn = document.createElement('button');
    tempBtn.classList.add('temp-btn');
    tempBtn.innerText = `Change to ${unit}`;
    weatherInfo.appendChild(tempBtn);
  }
}