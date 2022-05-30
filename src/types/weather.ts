export interface WeatherResponse {
  timezone: number;
  id: number;
  name: string;
  cod: number;
  base: string;
  visibility: number;
  dt: number;
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
}
