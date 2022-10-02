export default class ApiHandler {
  getWeatherData = async (location) => {
    try {
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=589970a2440f5a30f2fca88685162eb3`, { mode: 'cors' });
      let data = await response.json();
      return data;
    } catch(err) {
      alert(err);
      console.log(err);
    }
  }
}