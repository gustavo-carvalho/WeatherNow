import type {WeatherResponse} from '@types/weather';

import getDerivedWeatherData from './getDerivedWeatherData';
import mapWeatherCodeToType from './mapWeatherCodeToType';

function parseWeatherData(data: WeatherResponse) {
  const currentTemp = Math.round(data.main.temp);
  const maxTemp = Math.round(data.main.temp_max);
  const minTemp = Math.round(data.main.temp_min);
  const windSpeedKM = Math.round(data.wind.speed * 3.6);

  const weatherType = mapWeatherCodeToType(data.weather.id);
  const {gradientColors, icon} = getDerivedWeatherData(weatherType);

  return {
    currentTemp,
    maxTemp,
    minTemp,
    windSpeedKM,
    precipitation: data.precipitation ?? 0,
    humidity: data.main.humidity,
    name: data.name,
    gradientColors,
    icon,
  };
}

export default parseWeatherData;
