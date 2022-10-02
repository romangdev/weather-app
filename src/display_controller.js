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
      // let farenheit = data_manipulator.makeFarenheit(cityWeather.temp);
      // console.log(farenheit);
      // temp.textContent = `${farenheit}`;
    }
    weatherInfo.append(temp);
  }
}