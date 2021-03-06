import type {GeoOptions} from 'react-native-geolocation-service';

import type {State} from './types';

export const POSITION_OPTIONS: GeoOptions = {
  accuracy: {
    android: 'high',
    ios: 'best',
  },
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 10000,
};

export const INITIAL_REDUCER_STATE: State = {
  status: 'idle',
  position: null,
  error: null,
};
