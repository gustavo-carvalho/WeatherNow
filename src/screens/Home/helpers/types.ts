import type {ImageSourcePropType} from 'react-native';

export type WeatherType = 'clear' | 'rain' | 'snow' | 'clouds';

export type UseFetchWeatherDataProps = {
  latitude: number;
  longitude: number;
} | null;

export interface HomeViewProps {
  onPressRefresh: () => void;
  dateFormatted: string;
  name: string;
  windSpeedKM: number;
  humidity: number;
  precipitation: number;
  maxTemp: number;
  minTemp: number;
  currentTemp: number;
  icon: ImageSourcePropType;
}
