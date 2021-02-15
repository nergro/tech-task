import { ApolloError } from '@apollo/client';
import { reducer } from './reducer';
import { Category } from '../../types/category';

test('should set loading status', () => {
  expect(reducer(null, { type: 'Products/LoadInitiated' })).toBe('loading');
});

test('should set loaded data', () => {
  const mockedData: Category[] = [];

  expect(reducer(null, { type: 'Products/Loaded', payload: mockedData })).toBe(mockedData);
});

test('should set error', () => {
  const error = new ApolloError({ errorMessage: 'Error' });
  expect(reducer(null, { type: 'Products/LoadFailed', payload: error })).toBe(error);
});
