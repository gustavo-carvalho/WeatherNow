import type {WeatherResponse} from '@types/weather';

function parseWeatherData(data: WeatherResponse) {
  const currentTemp = Math.round(data.main.temp);
  const maxTemp = Math.round(data.main.temp_max);
  const minTemp = Math.round(data.main.temp_min);
  const windSpeedKM = Math.round(data.wind.speed * 3.6);

  return {
    currentTemp,
    maxTemp,
    minTemp,
    windSpeedKM,
    precipitation: data.precipitation ?? 0,
    humidity: data.main.humidity,
    name: data.name,
  };
}

export default parseWeatherData;
