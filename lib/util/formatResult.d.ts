import { LoadOption, Id, IdFunc, Payload } from '../types';
interface GetIdParams<TParams> {
    id: Id | IdFunc<TParams> | undefined;
    params: TParams;
}
export declare const selectId: <TParams>({ id, params }: GetIdParams<TParams>) => string | number;
interface GetPayloadParams<T, K extends keyof T, TParams, TResult> {
    key: K;
    result: TResult;
    snapshot?: T[K];
    params: TParams;
    option: LoadOption<TParams, TResult, T[K]>;
}
export declare const selectPayload: <T, K extends keyof T, TParams, TResult>({ key, snapshot, result, params, option }: GetPayloadParams<T, K, TParams, TResult>) => Payload<T, K>;
export {};
