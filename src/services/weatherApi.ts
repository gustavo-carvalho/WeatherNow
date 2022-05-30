import Config from 'react-native-config';
import axios from 'axios';

import convertObjToQueryString from '@utils/convertObjToQueryString';
import type {WeatherResponse} from '@types/weather';

export async function getCurrentWeather(latitude: number, longitude: number) {
  const query = convertObjToQueryString({
    lat: latitude,
    lon: longitude,
    lang: 'pt_br',
    units: 'metric',
  });
  const uri = `${Config.OPEN_WEATHER_BASEURL}/weather?${query}&appid=${Config.OPEN_WEATHER_API_KEY}`;

  return axios.get<WeatherResponse>(uri, {
    timeout: 5000,
  });
}
