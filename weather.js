// const weatherApi = require('./weatherApi');

class Weather{

  constructor(apiObject){
    this.apiObject = apiObject;
    this.weatherData = null;
  }

  fetch(city) {
    this.apiObject.fetchWeatherData(city, (response) => {
      this.weatherData = response;
    })
  }

  getWeatherData() {
    return this.weatherData;
  }

}

module.exports = Weather;






