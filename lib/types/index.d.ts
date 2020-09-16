export declare type LegacyKey<K> = K | K[];
export interface ConnectOption {
    Loading?: any;
    Error?: any;
}
export declare type ResultFunc<V> = (snapshot?: V) => V;
export declare type ResultFuncPure<V> = (snapshot: V) => V;
export declare type AsyncFunction<TParams, TResult> = (params: TParams) => Promise<TResult>;
export declare type AsyncFunctionOrPromise<TParams, TResult> = AsyncFunction<TParams, TResult>;
declare type Reducer<TParams, TResult, V> = (state: V | undefined, result: TResult, params: TParams) => V;
export interface LoadOption<TParams, TResult, V> {
    reducer?: Reducer<TParams, TResult, V>;
    forceUpdate?: boolean;
    params?: TParams;
}
export declare type OptionOrReducer<TParams, TResult, V> = LoadOption<TParams, TResult, V> | Reducer<TParams, TResult, V>;
export interface LoadPayload<K, TResult> {
    key: K;
    promise: Promise<TResult>;
}
export interface Payload<T, K extends keyof T> {
    key: K;
    result?: T[K];
    error?: any;
}
export interface Props<V> {
    loading?: number;
    result?: V;
    promise?: Promise<unknown>;
    error?: any;
    fetchTime?: number;
}
export declare type State<T> = {
    [P in keyof T]?: Props<T[P]>;
};
export {};
