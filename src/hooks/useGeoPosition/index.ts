import {useCallback, useEffect, useReducer} from 'react';
import Geolocation, {
  GeoPosition,
  GeoError,
} from 'react-native-geolocation-service';

import {INITIAL_REDUCER_STATE, POSITION_OPTIONS} from './helpers/constants';
import geoPositionReducer from './helpers/geoPositionReducer';

function useGeoPosition() {
  const [state, dispatch] = useReducer(
    geoPositionReducer,
    INITIAL_REDUCER_STATE,
  );

  const handleGetPositionSuccess = useCallback((position: GeoPosition) => {
    const {latitude, longitude} = position.coords;
    dispatch({
      type: 'success',
      payload: {
        position: {
          latitude,
          longitude,
        },
      },
    });
  }, []);

  const handleGetPositionError = useCallback((error: GeoError) => {
    dispatch({type: 'error', payload: {error}});
  }, []);

  const getPosition = useCallback(() => {
    Geolocation.getCurrentPosition(
      handleGetPositionSuccess,
      handleGetPositionError,
      POSITION_OPTIONS,
    );
  }, [handleGetPositionSuccess, handleGetPositionError]);

  useEffect(() => {
    getPosition();
  }, [getPosition]);

  return {state, getPosition};
}

export default useGeoPosition;
