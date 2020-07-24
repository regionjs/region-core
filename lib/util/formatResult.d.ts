import { LoadOption, Id, IdFunc } from '../types';
interface GetIdParams<TParams> {
    id: Id | IdFunc<TParams> | undefined;
    params: TParams;
}
export declare const selectId: <TParams>({ id, params }: GetIdParams<TParams>) => string | number;
interface GetPayloadParams<K, V, TParams, TResult> {
    key: K;
    result: TResult;
    snapshot?: V;
    params: TParams;
    option: LoadOption<TParams, TResult, V>;
}
export declare const selectPayload: <K, V, TParams, TResult>({ key, snapshot, result, params, option }: GetPayloadParams<K, V, TParams, TResult>) => {
    key: K;
    id: string | number;
    result: V;
} | {
    key: K;
    result: any;
    id?: undefined;
};
export {};
