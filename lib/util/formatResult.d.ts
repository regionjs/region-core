import { FormatResultParams, LoadPayload, Payload } from '../types';
export declare const formatResult: ({ resultOrFunc, snapshot, format, reducer, params }: FormatResultParams) => any;
export declare const getPayload: ({ key, snapshot, result, params, option }: any) => Payload;
export declare const getLoadPayload: ({ key, promise, params, option }: any) => LoadPayload;
