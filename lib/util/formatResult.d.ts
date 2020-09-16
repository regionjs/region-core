import { LoadOption } from '../types';
interface FormatResultParams<V, TParams, TResult> {
    result: TResult;
    snapshot?: V;
    params: TParams;
    option: LoadOption<TParams, TResult, V>;
}
export declare const formatResult: <V, TParams, TResult>({ snapshot, result, params, option }: FormatResultParams<V, TParams, TResult>) => any;
interface GetPayloadParams<K, V, TParams, TResult> {
    key: K;
    result: TResult;
    snapshot?: V;
    params: TParams;
    option: LoadOption<TParams, TResult, V>;
}
export declare const selectPayload: <K, V, TParams, TResult>({ key, snapshot, result, params, option }: GetPayloadParams<K, V, TParams, TResult>) => {
    key: K;
    result: any;
};
export {};
