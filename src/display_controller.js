export default class DisplayController {
  removeAllChildren = (weatherInfo) => {
    let child = weatherInfo.lastElementChild;
    while (child) {
      weatherInfo.removeChild(child);
      child = weatherInfo.lastElementChild;
    }
  }

  displayTemperature = (cityWeather, weatherInfo) => {
    let temp = document.createElement('p');
    console.log(cityWeather.temp);
    temp.textContent = `${cityWeather.temp}`;
    weatherInfo.append(temp);
  }
}