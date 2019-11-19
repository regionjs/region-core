import { FormatResultParams, LoadOption, LoadPayload, Params, Payload, SimpleKey, ResultOrFunc } from '../types';
export declare const formatResult: ({ resultOrFunc, snapshot, format, reducer, params }: FormatResultParams) => any;
interface GetPayloadParams {
    key: SimpleKey;
    result: ResultOrFunc;
    snapshot: any;
    params: Params;
    option: LoadOption;
}
export declare const getPayload: ({ key, snapshot, result, params, option }: GetPayloadParams) => Payload;
interface GetLoadPayloadParams {
    key: SimpleKey;
    promise: Promise<any>;
    params: Params;
    option: LoadOption;
}
export declare const getLoadPayload: ({ key, promise, params, option }: GetLoadPayloadParams) => LoadPayload;
export {};
