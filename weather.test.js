const Weather = require('./weather');
const WeatherApi = require('./weatherApi');

describe('Weather Class', () => {
  it('fetches data or somtin', () => {
    const mockedWeatherApi = {
      fetchWeatherData: (city, callbackFunction) => {
        callbackFunction({
          weather: "It's a scorcher",
          wind: "gale force 200",
          safetyWarning: "pray to your gods",
        });
      },
    };

    const weather = new Weather(mockedWeatherApi);
    weather.fetch('Bristol');
    expect(weather.getWeatherData()).toEqual({
      weather: "It's a scorcher",
      wind: "gale force 200",
      safetyWarning: "pray to your gods",
    });
  });
  it('displays data', () => {
    const weatherApi = new WeatherApi();
    const weather = new Weather(weatherApi);
    weather.fetch('London');
    expect(weather.getWeatherData()).toBe(
      City:         London,
      Weather:      Clouds,
      Temperature:  18.4,
      Feels like:   16.0,
      Humidity:     64%,
    );
  });
});