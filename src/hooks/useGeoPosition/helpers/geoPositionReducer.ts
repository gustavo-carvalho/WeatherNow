import type {Action, State} from './types';

function geoPositionReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'success': {
      return {
        ...state,
        status: 'success',
        position: action.payload.position,
      };
    }
    case 'loading': {
      return {...state, error: null, position: null, status: 'loading'};
    }
    case 'error': {
      return {...state, status: 'error', error: action.payload.error};
    }
    default: {
      return state;
    }
  }
}

export default geoPositionReducer;
