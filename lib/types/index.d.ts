import { ComponentType as RawComponentType } from 'react';
export declare type ComponentType = RawComponentType | any;
export interface ComplexKey<K> {
    key?: K;
    loading?: K;
    result?: K;
    fetchTime?: K;
    error?: K;
}
export declare type LegacyKey<K> = K | K[] | ComplexKey<K>;
export declare type DisplayType = ComponentType;
export interface ConnectOption {
    Loading?: ComponentType;
    Error?: ComponentType;
}
export declare type ResultFunc<V> = (snapshot?: V) => V;
export declare type ResultOrFunc<V> = V | ResultFunc<V>;
export declare type AsyncFunction<TParams, V> = (params: TParams) => Promise<V>;
export declare type AsyncFunctionOrPromise<TParams, V> = AsyncFunction<TParams, V>;
export declare type AsyncFunctionWithoutParams<V> = () => Promise<V>;
export declare type AsyncFunctionOrPromiseWithoutParams<V> = AsyncFunctionWithoutParams<V> | Promise<V> | V;
export declare type Id = string | number;
declare type Format<V> = (result: V, snapshot?: V) => V;
declare type Reducer<TParams, V> = (state: V | undefined, result: V, params: TParams) => V;
export declare type IdFunc<TParams> = (params: TParams) => Id;
export interface LoadOption<TParams, V> {
    format?: Format<V>;
    reducer?: Reducer<TParams, V>;
    forceUpdate?: boolean;
    params?: TParams;
    id?: Id | IdFunc<TParams>;
    delay?: boolean;
}
export declare type OptionOrReducer<TParams, V> = LoadOption<TParams, V> | Reducer<TParams, V>;
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
export interface Props<V> {
    loading?: number;
    result?: V;
    id?: any;
    promise?: Promise<V>;
    error?: any;
    fetchTime?: number;
    results: {
        [key: string]: V;
    };
}
export declare type PropsAttribute<T> = keyof Props<T>;
export declare type State<T> = {
    [P in keyof T]?: Props<T[P]>;
};
export {};
