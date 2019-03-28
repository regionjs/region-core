import { ComponentType as RawComponentType } from 'react';
export declare type ComponentType = RawComponentType | any;
declare type BaseKey = string | string[];
interface ComplexKey {
    key: BaseKey;
    loading: BaseKey;
    result: BaseKey;
    error: BaseKey;
    selector: any;
}
export declare type Key = BaseKey | ComplexKey | any;
export declare type DisplayType = ComponentType;
export declare type EntityName = string;
export declare type Result = any;
export declare type AsyncFunction = any;
export declare type Params = any;
export declare type Format = (result: any, snapshot: any) => any;
export declare type Name = string;
export declare type Path = string | string[];
export declare type SelectPropsKey = string | string[];
export declare type Loading = boolean | undefined;
export declare type Loadings = Loading | Loading[];
export declare type Results = Result | Result[];
export declare type Error = any;
export declare type Errors = Error | Error[];
export {};
