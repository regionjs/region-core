import { Any } from './basic';
import { Params, Format, Name, ComponentType, SimpleKeys, Loading, Result, FetchTime, Error } from './types';
export interface ConnectOption {
    Loading?: ComponentType;
    Error?: ComponentType;
}
export interface LoadOption {
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
    DefaultLoading?: ComponentType;
    DefaultError?: ComponentType;
}
export declare type Config = StrictConfig | Name;
export interface State {
    [key: string]: Any;
}
export interface Payload {
    key: string;
    result?: Any;
    error?: Error;
}
export interface Action {
    type: string;
    payload: Payload;
}
export interface SelectPropsParams {
    keys: SimpleKeys;
    loadings: Loading[];
    results: Result[];
    fetchTimes: FetchTime[];
    errors: Error[];
}
