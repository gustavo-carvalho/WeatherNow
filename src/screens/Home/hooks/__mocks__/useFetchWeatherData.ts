const useWeatherDataResponse = {
  status: 'success',
  data: {
    coord: {
      lon: -43.1964,
      lat: -22.9083,
    },
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'nuvens dispersas',
        icon: '03n',
      },
    ],
    base: 'stations',
    main: {
      temp: 23.36,
      feels_like: 23.89,
      temp_min: 21.99,
      temp_max: 23.97,
      pressure: 1013,
      humidity: 82,
    },
    visibility: 10000,
    wind: {
      speed: 5.66,
      deg: 200,
    },
    clouds: {
      all: 40,
    },
    dt: 1653965473,
    sys: {
      type: 1,
      id: 8429,
      country: 'BR',
      sunrise: 1653902727,
      sunset: 1653941733,
    },
    timezone: -10800,
    id: 3451190,
    name: 'Rio de Janeiro',
    cod: 200,
  },
};

module.exports = () => useWeatherDataResponse;
