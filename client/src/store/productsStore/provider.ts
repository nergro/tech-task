import { storeFactory } from '../storeFactory';

import { reducer } from './reducer';
import { Action as GenericAction, ActionWithPayload, Resource, StoreError } from '../types';
import { Category } from '../../types/category';

export type Action =
  | GenericAction<'Products/LoadInitiated'>
  | ActionWithPayload<'Products/Loaded', Category[]>
  | ActionWithPayload<'Products/LoadFailed', StoreError>;

export type State = Resource<Category[]> | null;

const initialState: State = null;

export const {
  dispatchContext: ProductsDispatchContext,
  stateContext: ProductsStateContext,
  provider: ProductsStoreProvider,
} = storeFactory(reducer, initialState);
