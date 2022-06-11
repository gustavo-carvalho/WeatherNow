import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RequestLocation from '@screens/RequestLocation';
import Home from '@screens/Home';

const RootStack = createNativeStackNavigator();

const Routes = () => {
  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="RequestLocation">
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="RequestLocation" component={RequestLocation} />
    </RootStack.Navigator>
  );
};

export default Routes;
