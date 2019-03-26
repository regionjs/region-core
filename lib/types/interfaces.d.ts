import { Params, Format, Name } from './types';
export interface ConnectOptions {
    Loading?: any;
    Error?: any;
}
export interface LoadOptions {
    format?: Format;
    forceUpdate?: boolean;
    params?: Params;
    id?: string;
}
export interface StrictConfig {
    name?: Name;
    expiredTime?: number;
    enableLog?: boolean;
    strictLoading?: boolean;
    DefaultLoading?: any;
    DefaultError?: any;
}
export declare type Config = StrictConfig | Name;
export interface ProvideOptions {
    store?: any;
    reducers?: any;
}
export interface Payload {
    key: string;
    result?: any;
    error?: Error;
    withLoadEnd?: boolean;
}
export interface Action {
    type: string;
    payload: Payload;
}
