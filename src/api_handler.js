export default class handleAPI {
  getWeatherData = async (location) => {
    try {
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=589970a2440f5a30f2fca88685162eb3`);
      console.log(response);
      let data = await response.json();
      console.log(data);
    } catch(err) {
      alert(err);
    }
  }
}