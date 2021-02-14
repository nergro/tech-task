import { storeFactory } from '../storeFactory';

import { reducer } from './reducer';
import { ActionWithPayload } from '../types';

export type Action = ActionWithPayload<'Search/Update', string>;

export type State = string;

const initialState: State = '';

export const {
  dispatchContext: SearchDispatchContext,
  stateContext: SearchStateContext,
  provider: SearchStoreProvider,
} = storeFactory(reducer, initialState);
