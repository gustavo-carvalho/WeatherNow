import {Dispatch, SetStateAction} from 'react';

export type LocationPermission =
  | 'idle'
  | 'pending'
  | 'granted'
  | 'disabled'
  | 'denied'
  | 'restricted'
  | 'never_ask_again';

export interface GeoPermissionContextData {
  permission: LocationPermission;
  setPermission: Dispatch<SetStateAction<LocationPermission>>;
  requestPermission: () => Promise<void>;
}
