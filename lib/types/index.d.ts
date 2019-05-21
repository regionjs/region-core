import { ComponentType as RawComponentType } from 'react';
export declare type Any = any;
export interface Props {
    [key: string]: Any;
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
declare type Format = (result: any, snapshot: any) => any;
export interface LoadOption {
    format?: Format;
    forceUpdate?: boolean;
    params?: Params;
    id?: string;
}
export declare type GetDerivedStateFromProps = (props: Props, snapshot: any) => any;
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
export declare type Loading = boolean | undefined;
export declare type FetchTime = number;
export declare type Error = any;
export interface SelectPropsParams {
    keys: SimpleKeys;
    loadings: Loading[];
    results: Result[];
    fetchTimes: FetchTime[];
    errors: Error[];
}
export {};
