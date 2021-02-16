import { useContext, useEffect } from 'react';
import { ProductsDispatchContext, ProductsStateContext, State, Action } from './provider';
import { Dispatch } from '../types';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../services/queries';
import { isError, isLoading } from '../../services/storeStateStatus';

export const useState = (): State => {
  const state = useContext(ProductsStateContext);
  if (state === undefined) {
    throw new Error('Products store is not initialized');
  }
  return state;
};

export const useDispatch = (): Dispatch<Action> => {
  const dispatch = useContext(ProductsDispatchContext);
  if (dispatch === undefined) {
    throw new Error('Products store is not initialized');
  }
  return dispatch;
};

enum ActionType {
  loading = 'Products/LoadInitiated',
  loaded = 'Products/Loaded',
  failed = 'Products/LoadFailed',
}

export const useProductsResource = (): State => {
  const state = useState();
  const dispatch = useDispatch();

  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    skip: state !== null && !isLoading(state) && !isError(state),
  });

  useEffect(() => {
    if (loading) {
      return dispatch({ type: ActionType.loading });
    }

    if (error) {
      return dispatch({ type: ActionType.failed, payload: error });
    }

    if (data) {
      return dispatch({ type: ActionType.loaded, payload: data.categories });
    }
  }, [data, dispatch, error, loading]);

  return state;
};
