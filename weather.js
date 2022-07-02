const WeatherApi = require("./weatherApi");

class Weather {
  constructor(apiObject) {
    this.apiObject = apiObject;
  }

  fetch(city) {
    this.apiObject.fetchWeatherData(city, (jsObject) => {
      this.weatherData = jsObject;
    })
  };

  getWeatherData() {
    return this.weatherData;
  }
}

module.exports = Weather;

const newWeatherApi = new WeatherApi();
const weather = new Weather(newWeatherApi);
weather.fetch("London");
console.log(weather.getWeatherData());

// newWeatherApi.fetchWeatherData('London', (response) => {
// console.log(response);
// });
