import { ApolloError } from '@apollo/client';

export type StoreError = ApolloError;

export interface Action<T> {
  readonly type: T;
}

export interface ActionWithPayload<T, P> extends Action<T> {
  readonly payload: P;
}

export const isError = (error: unknown): error is ApolloError =>
  typeof error === 'object' && error !== null && (error as ApolloError).message !== undefined;

export const Loading = 'loading';
type LoadingType = typeof Loading;

export const isLoading = (state: unknown): state is LoadingType => state === Loading;

export type Reducer<S, A> = (state: S, action: A) => S;
export type Dispatch<A> = (action: A) => void;

export type Resource<T> = T | LoadingType | StoreError;
