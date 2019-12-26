import { LoadOption, LoadPayload, Payload } from '../types';
interface GetPayloadParams<T, K extends keyof T, TParams> {
    key: K;
    result: T[K];
    snapshot?: T[K];
    params: TParams;
    option: LoadOption<TParams, T[K]>;
}
export declare const getPayload: <T, K extends keyof T, TParams>({ key, snapshot, result, params, option }: GetPayloadParams<T, K, TParams>) => Payload<T, K>;
interface GetLoadPayloadParams<T, K extends keyof T, TParams> {
    key: K;
    promise: Promise<T[K]>;
    params: TParams;
    option: LoadOption<TParams, T[K]>;
}
export declare const getLoadPayload: <T, K extends keyof T, TParams>({ key, promise, params, option }: GetLoadPayloadParams<T, K, TParams>) => LoadPayload<T, K>;
export {};
