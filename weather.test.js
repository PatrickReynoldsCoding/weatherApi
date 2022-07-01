const Weather = require('./weather');

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
});