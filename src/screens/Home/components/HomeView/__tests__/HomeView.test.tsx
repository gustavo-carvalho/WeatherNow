import React from 'react';
import {render} from '@testing-library/react-native';

import windImage from '@assets/wind.png';
import type {HomeViewProps} from '@screens/Home/helpers/types';

import HomeView from '../';

const homeViewPropsMock: HomeViewProps = {
  currentTemp: 10,
  dateFormatted: '10/10/2010',
  humidity: 15,
  icon: windImage,
  maxTemp: 20,
  minTemp: 16,
  name: 'test',
  onPressRefresh: jest.fn(),
  precipitation: 30,
  windSpeedKM: 40,
};

describe('HomeView', () => {
  it('should show the weather data', async () => {
    const {getByTestId} = render(<HomeView {...homeViewPropsMock} />);
    expect(getByTestId('name').props.children).toBe(homeViewPropsMock.name);

    expect(getByTestId('date-formatted').props.children).toBe(
      homeViewPropsMock.dateFormatted,
    );

    expect(getByTestId('current-temp').props.children).toStrictEqual([
      homeViewPropsMock.currentTemp,
      '°',
    ]);

    expect(getByTestId('max-temp').props.children).toStrictEqual([
      homeViewPropsMock.maxTemp,
      '°C',
    ]);

    expect(getByTestId('min-temp').props.children).toStrictEqual([
      homeViewPropsMock.minTemp,
      '°C',
    ]);

    expect(getByTestId('precipitation').props.children).toStrictEqual([
      homeViewPropsMock.precipitation,
      '%',
    ]);

    expect(getByTestId('humidity').props.children).toStrictEqual([
      homeViewPropsMock.humidity,
      '%',
    ]);

    expect(getByTestId('wind-speed-km').props.children).toStrictEqual([
      homeViewPropsMock.windSpeedKM,
      ' km/h',
    ]);
  });
});
