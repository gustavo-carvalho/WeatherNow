import React from 'react';

import useGeoPermission, {
  withGeoPermissionProvider,
} from '@contexts/geoPermission';
import RequestLocation from '@screens/RequestLocation';
import Home from '@screens/Home';

const App = () => {
  const {permission} = useGeoPermission();

  if (permission === 'granted') {
    return <Home />;
  }

  return <RequestLocation />;
};

export default withGeoPermissionProvider(App);
