import ApiHandler from './api_handler.js'
import ObjectMaker from './object_maker.js' 

let apiHandler = new ApiHandler();
let objectMaker = new ObjectMaker();

let data = await apiHandler.getWeatherData('london');
let cityWeather = objectMaker.returnObject(data);
console.log(cityWeather);