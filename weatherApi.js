const got = require("got");
const apiKey = "373f17a21fec474087b71343076233d8";

class WeatherApi {

  
  fetchWeatherData(city, callbackFunction) {
    got(
      `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
    ).then((response) => {
      callbackFunction(JSON.parse(response.body));
    });
  }
}

// const api = new WeatherApi();

// api.fetchWeatherData('London', (weatherData) => {
//   return weatherData;
// });

module.exports = WeatherApi;
