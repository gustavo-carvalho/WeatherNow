import type {WeatherType} from '../helpers/types';

function mapWeatherCodeToType(code: number): WeatherType {
  if (code === 800) {
    return 'clear';
  }

  const codeFirstDigit = String(code)[0];
  switch (codeFirstDigit) {
    case '5':
    case '3':
    case '2':
      return 'rain';
    case '6':
      return 'snow';
    case '8':
    default:
      return 'clouds';
  }
}

export default mapWeatherCodeToType;
