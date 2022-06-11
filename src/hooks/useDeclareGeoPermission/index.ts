import {useCallback, useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import type {
  GeoPermissionContextData,
  LocationPermission,
} from '@contexts/geoPermission/types';

function useDeclareGeoPermission(): GeoPermissionContextData {
  const [permission, setPermission] = useState<LocationPermission>('idle');

  const requestPermissionAndroid = useCallback(async () => {
    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return setPermission('granted');
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    setPermission(status);
  }, []);

  const requestPermissionIOS = useCallback(async () => {
    const status = await Geolocation.requestAuthorization('whenInUse');
    setPermission(status);
  }, []);

  const requestPermission = useCallback(() => {
    setPermission('pending');

    return Platform.OS === 'android'
      ? requestPermissionAndroid()
      : requestPermissionIOS();
  }, [requestPermissionAndroid, requestPermissionIOS]);

  return {permission, setPermission, requestPermission};
}

export default useDeclareGeoPermission;
