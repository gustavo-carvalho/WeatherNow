import type {GeoError} from 'react-native-geolocation-service';

interface Position {
  latitude: number;
  longitude: number;
}

export interface State {
  status: 'idle' | 'loading' | 'success' | 'error';
  position: Position | null;
  error: GeoError | null;
}

export type Action =
  | {type: 'loading'; payload: undefined}
  | {
      type: 'success';
      payload: {
        position: Position;
      };
    }
  | {
      type: 'error';
      payload: {
        error: GeoError;
      };
    };
