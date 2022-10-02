export default class DataManipulator {
  makeFarenheit = (k) => {
    let farenheit = (k - 273.15) * 9 / 5 + 32;
    return Math.round(farenheit);
  }

  makeCelsius = (k) => {
    let celsius = k - 273.15;
    return Math.round(celsius);
  }
}