import React, {createContext, useContext} from 'react';

import type {RequiredChildren} from '@types/requiredChildren';
import useDeclareGeoPermission from '@hooks/useDeclareGeoPermission';

import type {GeoPermissionContextData} from './types';

const GeoPermissionContext = createContext<
  GeoPermissionContextData | undefined
>(undefined);

export function GeoPermissionProvider({children}: RequiredChildren) {
  const value = useDeclareGeoPermission();
  return (
    <GeoPermissionContext.Provider value={value}>
      {children}
    </GeoPermissionContext.Provider>
  );
}

export default function useGeoPermission(): GeoPermissionContextData {
  const context = useContext(GeoPermissionContext);

  if (!context) {
    throw new Error(
      'useGeoPermissionContext must be used within a GeoPermissionProvider',
    );
  }

  return context;
}

export function withGeoPermissionProvider(Component: any) {
  return function WrapperComponent(props: any) {
    return (
      <GeoPermissionProvider>
        <Component {...props} />
      </GeoPermissionProvider>
    );
  };
}
