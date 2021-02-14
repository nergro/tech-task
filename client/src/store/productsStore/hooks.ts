import { useContext, useEffect } from 'react';
import { ProductsDispatchContext, ProductsStateContext, State, Action } from './provider';
import { Dispatch } from '../types';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../services/queries';
import { isError, isLoading } from '../../types/common';

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

export const useProductsResource = (): State => {
  const state = useState();
  const dispatch = useDispatch();

  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    skip: state !== null && !isLoading(state) && !isError(state),
  });

  useEffect(() => {
    if (loading) {
      return dispatch({ type: 'Products/LoadInitiated' });
    }

    if (error) {
      return dispatch({ type: 'Products/LoadFailed', payload: error });
    }

    if (data) {
      return dispatch({ type: 'Products/Loaded', payload: data.categories });
    }
  }, [data, dispatch, error, loading]);

  return state;
};
