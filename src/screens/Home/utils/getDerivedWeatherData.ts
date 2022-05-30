import type {WeatherType} from '../helpers/types';
import getDayPeriod from './getDayPeriod';

import sunImage from '@assets/sun.png';
import snowImage from '@assets/snow.png';
import moonImage from '@assets/moon.png';
import cloudRainImage from '@assets/cloud-rain.png';
import cloudyImage from '@assets/cloudy.png';

export default function getDerivedWeatherData(weatherType: WeatherType) {
  const period = getDayPeriod();
  if (period === 'night') {
    return {
      gradientColors: ['#1306A5', '#562976'],
      icon: moonImage,
    };
  }

  switch (weatherType) {
    case 'clear':
      return {
        gradientColors: getClearSkyGradientColors(period),
        icon: sunImage,
      };
    case 'rain':
      return {
        gradientColors: ['#123597', '#98A0BF'],
        icon: cloudRainImage,
      };
    case 'snow':
      return {
        gradientColors: ['#A7BDCA', '#797D87'],
        icon: snowImage,
      };
    case 'clouds':
      return {
        gradientColors: ['rgba(84, 148, 178, 0.75)', '#A7BDCA'],
        icon: cloudyImage,
      };
  }
}

function getClearSkyGradientColors(
  period: 'morning' | 'afternoon' | 'evening' | 'night',
) {
  return {
    morning: ['#3f64a4', '#ceaca7'],
    afternoon: ['#51A4DB', '#73BAE1'],
    evening: ['#821061', '#F94E38'],
    night: ['#1306A5', '#562976'],
  }[period];
}
