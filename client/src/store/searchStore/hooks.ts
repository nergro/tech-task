import { useContext } from 'react';
import { SearchDispatchContext, SearchStateContext, State, Action } from './provider';
import { Dispatch } from '../types';

export const useState = (): State => {
  const state = useContext(SearchStateContext);
  if (state === undefined) {
    throw new Error('Search store is not initialized');
  }
  return state;
};

export const useDispatch = (): Dispatch<Action> => {
  const dispatch = useContext(SearchDispatchContext);
  if (dispatch === undefined) {
    throw new Error('Search store is not initialized');
  }
  return dispatch;
};
