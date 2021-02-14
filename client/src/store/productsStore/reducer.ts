import { Loading } from '../types';

import { Action, State } from './provider';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'Products/LoadInitiated': {
      return Loading;
    }
    case 'Products/Loaded': {
      return action.payload;
    }
    case 'Products/LoadFailed': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
