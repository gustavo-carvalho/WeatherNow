import {useState, useCallback, useEffect} from 'react';

import * as weatherApi from '@services/weatherApi';
import type {WeatherResponse} from '@types/weather';
import type {RequestStatus} from '@types/Request';

import type {UseFetchWeatherDataProps} from '../helpers/types';

export default function useFetchWeatherData(params: UseFetchWeatherDataProps) {
  const [status, setStatus] = useState<RequestStatus>('idle');
  const [data, setData] = useState<WeatherResponse | null>(null);

  const fetchWeather = useCallback(
    async (latitude: number, longitude: number) => {
      setData(null);
      setStatus('loading');

      try {
        const response = await weatherApi.getCurrentWeather(
          latitude,
          longitude,
        );
        setData(response.data);
        setStatus('success');
      } catch (error) {
        setStatus('failed');
      }
    },
    [],
  );

  useEffect(() => {
    if (params) {
      fetchWeather(params.latitude, params.longitude);
    }
  }, [fetchWeather, params]);

  return {status, data};
}
