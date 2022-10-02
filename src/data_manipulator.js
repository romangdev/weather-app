export default class DataManipulator {
  makeFarenheit = (k) => {
    let farenheit = (k - 273.15) * 9 / 5 + 32;
    return farenheit;
  }
}