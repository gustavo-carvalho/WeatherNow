import React, {useEffect} from 'react';

import useGeoPermission, {
  withGeoPermissionProvider,
} from '@contexts/geoPermission';
import RequestLocation from '@screens/RequestLocation';
import Home from '@screens/Home';
import LoadingOverlay from '@components/LoadingOverlay';

const App = () => {
  const {permission, requestPermission} = useGeoPermission();

  useEffect(() => {
    requestPermission();
  }, [requestPermission]);

  if (permission === 'pending') {
    return <LoadingOverlay visible />;
  }

  if (permission === 'granted') {
    return <Home />;
  }

  return <RequestLocation />;
};

export default withGeoPermissionProvider(App);
