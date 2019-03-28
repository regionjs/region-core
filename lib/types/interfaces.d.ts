import { Params, Format, Name, ComponentType } from './types';
export interface Props {
    [key: string]: any;
}
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
export interface ProvideOptions {
    store?: any;
    reducers?: any;
}
export interface State {
    [key: string]: any;
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
