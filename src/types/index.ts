import { ComponentType as RawComponentType } from 'react';

export type ComponentType = RawComponentType | any;

// public
// useProps
export interface ComplexKey<K> {
  key?: K;
  loading?: K;
  result?: K;
  fetchTime?: K;
  error?: K;
}

export type LegacyKey<K> = K | K[] | ComplexKey<K>;

// connect
export type DisplayType = ComponentType;

export interface ConnectOption {
  Loading?: ComponentType;
  Error?: ComponentType;
}

// set & load
// set
export type ResultFunc<V> = (snapshot?: V) => V;
export type ResultOrFunc<V> = V | ResultFunc<V>;

// load
export type AsyncFunction<TParams, V> = (params: TParams) => Promise<V>;
export type AsyncFunctionOrPromise<TParams, V> = AsyncFunction<TParams, V>; // 事实上有 Promise<V> | V，但是 TS 上不支持;

export type AsyncFunctionWithoutParams<V> = () => Promise<V>;
export type AsyncFunctionOrPromiseWithoutParams<V> = AsyncFunctionWithoutParams<V> | Promise<V> | V;

export type Id = string | number;
type Format<V> = (result: V, snapshot?: V) => V;
type Reducer<TParams, V> = (state: V | undefined, result: V, params: TParams) => V;

export type IdFunc<TParams> = (params: TParams) => Id;

export interface LoadOption<TParams, V> {
  format?: Format<V>;
  reducer?: Reducer<TParams, V>;
  forceUpdate?: boolean;
  params?: TParams;
  id?: Id | IdFunc<TParams>;
  delay?: boolean;
}

export type OptionOrReducer<TParams, V> = LoadOption<TParams, V> | Reducer<TParams, V>;

// private
// get
// reducer

export interface LoadPayload<T, K extends keyof T> {
  key: K;
  promise: Promise<T[K]>;
  id?: Id;
}

export interface Payload<T, K extends keyof T> {
  key: K;
  result?: T[K];
  id?: Id;
  error?: any;
}

// internal
export interface Props<V> {
  loading?: number;
  result?: V;
  id?: any;
  promise?: Promise<V>;
  error?: any;
  fetchTime?: number;
  results: {[key: string]: V};
}

export type PropsAttribute<T> = keyof Props<T>;

export type State<T> = {
  [P in keyof T]?: Props<T[P]>;
};
