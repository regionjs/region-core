import { ComponentType as RawComponentType } from 'react';
export interface Props {
    [key: string]: any;
}
export declare type ComponentType = RawComponentType | any;
export declare type SimpleKey = string;
export declare type SimpleKeys = SimpleKey[];
export declare type Key = SimpleKey | SimpleKeys;
interface ComplexKey {
    key?: Key;
    loading?: Key;
    result?: Key;
    fetchTime?: Key;
    error?: Key;
}
export declare type LegacyKey = Key | ComplexKey;
export declare type DisplayType = ComponentType;
export interface ConnectOption {
    Loading?: ComponentType;
    Error?: ComponentType;
}
export declare type EntityName = string;
export declare type Result = any;
declare type ResultFunc = (snapshot: Snapshot) => Result;
export declare type ResultOrFunc = Result | ResultFunc;
export declare type AsyncFunction = any;
export declare type Params = any;
export declare type Id = string | number | Symbol;
declare type Snapshot = any;
declare type Format = (result: Result, snapshot: Snapshot) => Result;
declare type Reducer = (state: any, action: any, params: any) => any;
declare type IdFunc = (params: Params) => Id;
export interface LoadOption {
    format?: Format;
    reducer?: Reducer;
    forceUpdate?: boolean;
    params?: Params;
    id?: Id | IdFunc;
    delay?: boolean;
}
export declare type OptionOrReducer = LoadOption | Reducer;
export interface State {
    [key: string]: Props;
}
export interface LoadPayload {
    key: string;
    promise: Promise<any>;
    id?: Id;
}
export interface Payload {
    key: string;
    result?: Result;
    id?: Id;
    error?: Error;
}
export declare type Loading = boolean | undefined;
export declare type FetchTime = number | undefined;
export declare type Error = any;
export interface FormatResultParams {
    resultOrFunc: ResultOrFunc;
    snapshot: Snapshot;
    format?: Format;
    reducer?: Reducer;
    params?: Params;
}
export interface FormatResultWithIdParams {
    resultOrFunc: ResultOrFunc;
    snapshot: Snapshot;
    format?: Format;
    id: Id;
    reducer?: Reducer;
    params?: Params;
}
export {};
