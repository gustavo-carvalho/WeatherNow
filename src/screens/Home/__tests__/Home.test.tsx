import React from 'react';
import {render} from '@testing-library/react-native';

import useGeoPosition from '@hooks/useGeoPosition';

import Home from '../';

jest.mock('@contexts/geoPermission', () =>
  jest.fn().mockReturnValue({setPermission: jest.fn()}),
);
jest.mock('@hooks/useGeoPosition', () => jest.fn());
jest.mock('../hooks/useFetchWeatherData');
jest.mock('react-native-linear-gradient', () => 'LinearGradient');

describe('Home', () => {
  afterEach(() => jest.clearAllMocks());

  it('should show the loading spinner', async () => {
    (
      useGeoPosition as jest.MockedFunction<typeof useGeoPosition>
    ).mockReturnValue({
      state: {error: null, position: null, status: 'loading'},
      getPosition: jest.fn(),
    });

    const {getByTestId} = render(<Home />);
    const homeLoadingOverlay = getByTestId('home-loading-overlay');
    expect(homeLoadingOverlay.props.visible).toBe(true);
  });

  it('should render correctly', () => {
    (
      useGeoPosition as jest.MockedFunction<typeof useGeoPosition>
    ).mockReturnValue({
      state: {
        error: null,
        position: {latitude: 1231231, longitude: 123123},
        status: 'success',
      },
      getPosition: jest.fn(),
    });

    const {getByTestId} = render(<Home />);
    const homeLoadingOverlay = getByTestId('home-loading-overlay');
    expect(homeLoadingOverlay.props.visible).toBe(false);
  });
});
