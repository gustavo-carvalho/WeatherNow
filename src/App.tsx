import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Routes from '@routes';
import {GeoPermissionProvider} from '@contexts/geoPermission';

const App = () => {
  return (
    <NavigationContainer>
      <GeoPermissionProvider>
        <Routes />
      </GeoPermissionProvider>
    </NavigationContainer>
  );
};

export default App;
