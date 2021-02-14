import { ApolloError } from '@apollo/client';

export const isError = (error: unknown): error is ApolloError =>
  typeof error === 'object' && error !== null && (error as ApolloError).message !== undefined;

const Loading = 'loading';
type LoadingType = typeof Loading;

export const isLoading = (state: unknown): state is LoadingType => state === Loading;
