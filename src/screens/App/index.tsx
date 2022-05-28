import React from 'react';

import useGeoPermission, {
  withGeoPermissionProvider,
} from '@contexts/geoPermission';
import {RequestLocation} from '@screens';
import Home from '@screens/Home';

const App = () => {
  const {permission} = useGeoPermission();
  console.log('permission: ', permission);

  if (permission === 'granted') {
    return <Home />;
  }

  return <RequestLocation />;
};

export default withGeoPermissionProvider(App);
