import { LoadOption } from '../types';
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
