import { Action, State } from './provider';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'Search/Update': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
