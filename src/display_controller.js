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

  displayTemperature = (cityWeather, weatherInfo, unit) => {
    let temp = document.createElement('p');
    if (unit === 'Farenheit') {
      let farenheit = data_manipulator.makeFarenheit(cityWeather.temp);
      console.log(farenheit);
      temp.textContent = `${farenheit}`;
    } else {
      let celsius = data_manipulator.makeCelsius(cityWeather.temp);
      console.log(celsius);
      temp.textContent = `${celsius}`;
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