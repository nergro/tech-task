import { ApolloError } from '@apollo/client';
import { LoadingType, Loading } from '../store/types';

export const isError = (error: unknown): error is ApolloError =>
  typeof error === 'object' && error !== null && (error as ApolloError).message !== undefined;

export const isLoading = (state: unknown): state is LoadingType => state === Loading;
