import {renderHook} from '@testing-library/react-hooks';
import Geolocation, {GeoError} from 'react-native-geolocation-service';

import useGeoPosition from '../';

jest.mock('react-native-geolocation-service', () => ({
  getCurrentPosition: jest.fn(),
}));

const geoErrorMock: GeoError = {
  code: 1,
  message: 'error',
};

const geoPositionMock = {
  coords: {
    speed: -1,
    longitude: -43.196388,
    latitude: -22.908333,
    accuracy: 5,
    heading: -1,
    altitude: 0,
    altitudeAccuracy: -1,
  },
  timestamp: 1653951972366.7722,
};

describe('useGeoPosition', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the position when the success callback is called', async () => {
    const getCurrentPositionMock = jest.spyOn(
      Geolocation,
      'getCurrentPosition',
    );
    getCurrentPositionMock.mockImplementation(successCallback => {
      successCallback(geoPositionMock);
    });

    const {result} = renderHook(() => useGeoPosition());

    const expectedResult = {
      status: 'success',
      error: null,
      position: {
        longitude: geoPositionMock.coords.longitude,
        latitude: geoPositionMock.coords.latitude,
      },
    };

    expect(result.current.state).toStrictEqual(expectedResult);
  });

  it('should return the error state when the error callback is called', async () => {
    const getCurrentPositionMock = jest.spyOn(
      Geolocation,
      'getCurrentPosition',
    );
    getCurrentPositionMock.mockImplementation((_, errorCallback) => {
      errorCallback && errorCallback(geoErrorMock);
    });

    const {result} = renderHook(() => useGeoPosition());

    const expectedResult = {
      status: 'error',
      error: geoErrorMock,
      position: null,
    };

    expect(result.current.state).toStrictEqual(expectedResult);
  });
});
