export type WeatherType = 'clear' | 'rain' | 'snow' | 'clouds';

export type UseFetchWeatherDataProps = {
  latitude: number;
  longitude: number;
} | null;
