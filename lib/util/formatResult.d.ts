import { FormatResultParams, Payload } from '../types';
export declare const formatResult: ({ resultOrFunc, snapshot, format, reducer, params }: FormatResultParams) => any;
export declare const getPayloadWithId: ({ key, resultOrFunc, snapshot, params, option }: any) => {
    key: any;
    results: any;
    id: any;
    result: any;
};
export declare const getPayload: ({ key, snapshot, result, params, option }: any) => Payload;
