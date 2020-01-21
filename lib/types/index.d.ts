export interface ComplexKey<K> {
    key?: K;
    loading?: K;
    result?: K;
    fetchTime?: K;
    error?: K;
}
export declare type LegacyKey<K> = K | K[] | ComplexKey<K>;
export interface ConnectOption {
    Loading?: any;
    Error?: any;
}
export declare type ResultFunc<V> = (snapshot?: V) => V;
export declare type ResultFuncPure<V> = (snapshot: V) => V;
export declare type AsyncFunction<TParams, TResult> = (params: TParams) => Promise<TResult>;
export declare type AsyncFunctionOrPromise<TParams, TResult> = AsyncFunction<TParams, TResult>;
export declare type AsyncFunctionWithoutParams<V> = () => Promise<V>;
export declare type AsyncFunctionOrPromiseWithoutParams<V> = AsyncFunctionWithoutParams<V> | Promise<V> | V;
export declare type Id = string | number;
declare type Format<TResult, V> = (result: TResult, snapshot?: V) => V;
declare type Reducer<TParams, TResult, V> = (state: V | undefined, result: TResult, params: TParams) => V;
export declare type IdFunc<TParams> = (params: TParams) => Id;
export interface LoadOption<TParams, TResult, V> {
    format?: Format<TResult, V>;
    reducer?: Reducer<TParams, TResult, V>;
    forceUpdate?: boolean;
    params?: TParams;
    id?: Id | IdFunc<TParams>;
    delay?: boolean;
}
export declare type OptionOrReducer<TParams, TResult, V> = LoadOption<TParams, TResult, V> | Reducer<TParams, TResult, V>;
export interface LoadPayload<K, TResult> {
    key: K;
    promise: Promise<TResult>;
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
    promise?: Promise<unknown>;
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
