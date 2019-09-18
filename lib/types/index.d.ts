import { ComponentType as RawComponentType } from 'react';
export interface Props {
    [key: string]: any;
}
export declare type ComponentType = RawComponentType | any;
export declare type SimpleKey = string;
export declare type SimpleKeys = SimpleKey[];
export declare type BaseKey = SimpleKey | SimpleKeys;
interface ComplexKey {
    key?: BaseKey;
    loading?: BaseKey;
    result?: BaseKey;
    fetchTime?: BaseKey;
    error?: BaseKey;
}
export declare type Key = BaseKey | ComplexKey;
export declare type DisplayType = ComponentType;
export interface ConnectOption {
    Loading?: ComponentType;
    Error?: ComponentType;
}
export declare type EntityName = string;
export declare type Result = any;
export declare type AsyncFunction = any;
export declare type Params = any;
declare type Id = any;
declare type Snapshot = any;
declare type Format = (result: Result, snapshot: Snapshot) => Result;
export declare type Reducer = (state: any, action: any, params: any) => any;
export interface LoadOption {
    format?: Format;
    reducer?: Reducer;
    forceUpdate?: boolean;
    params?: Params;
    id?: string;
    delay?: boolean;
}
export declare type Name = string;
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
    [key: string]: any;
}
export interface Payload {
    key: string;
    result?: Result;
    results?: Result[];
    id?: Id;
    error?: Error;
}
export interface Action {
    type: string;
    payload: Payload;
}
export declare type Loading = boolean | undefined;
export declare type FetchTime = number;
export declare type Error = any;
declare type ResultFunction = (snapshot: Snapshot) => Result;
export interface FormatResultParams {
    result: ResultFunction | Result;
    snapshot: Snapshot;
    format?: Format;
    reducer?: Reducer;
    params?: Params;
}
export interface FormatResultWithIdParams {
    result: Result;
    snapshot: Snapshot;
    format?: Format;
    id: Id;
    reducer?: Reducer;
    params?: Params;
}
export {};
