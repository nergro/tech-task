import { ApolloError } from '@apollo/client';

export type StoreError = ApolloError;

export interface Action<T> {
  readonly type: T;
}

export interface ActionWithPayload<T, P> extends Action<T> {
  readonly payload: P;
}

export const Loading = 'loading';
export type LoadingType = typeof Loading;

export type Reducer<S, A> = (state: S, action: A) => S;
export type Dispatch<A> = (action: A) => void;

export type Resource<T> = T | LoadingType | StoreError;
