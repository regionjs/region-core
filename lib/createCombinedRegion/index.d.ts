import { FC } from 'react';
import { ResultFunc, ResultFuncPure, AsyncFunctionOrPromise, LoadOption, OptionOrReducer, ConnectOption, RegionOption } from '../types';
export interface CreateCombinedRegionReturnValue<T> {
    private_setState_just_for_test: (value: any) => void;
    set: <K extends keyof T>(key: K, resultOrFunc: T[K] | ResultFunc<T[K]>) => T[K];
    reset: () => void;
    load: <K extends keyof T, TParams = void, TResult = unknown>(key: K, asyncFunction: AsyncFunctionOrPromise<TParams, TResult>, optionOrReducer?: OptionOrReducer<TParams, TResult, T[K]>, exOption?: LoadOption<TParams, TResult, T[K]>) => Promise<T[K] | void>;
    loadBy: <K extends keyof T, TParams = void, TResult = unknown>(key: K, asyncFunction: AsyncFunctionOrPromise<TParams, TResult>, optionOrReducer?: OptionOrReducer<TParams, TResult, T[K]>, exOption?: LoadOption<TParams, TResult, T[K]>) => (params: TParams) => Promise<T[K] | void>;
    getValue: <K extends keyof T>(key: K) => T[K] | undefined;
    getLoading: <K extends keyof T>(key: K) => boolean;
    getError: <K extends keyof T>(key: K) => Error | undefined;
    getFetchTime: <K extends keyof T>(key: K) => number | undefined;
    getProps: <K extends keyof T>(key: K) => any;
    connectWith: <K extends keyof T>(key: K, Display: any, option?: ConnectOption) => FC<any>;
    connect: <K extends keyof T>(key: K, option?: ConnectOption) => (Display?: any) => FC<any>;
    useValue: <K extends keyof T>(key: K) => T[K] | undefined;
    useLoading: <K extends keyof T>(key: K) => boolean;
    useError: <K extends keyof T>(key: K) => Error | undefined;
    useFetchTime: <K extends keyof T>(key: K) => number | undefined;
    useProps: <K extends keyof T>(key: K) => any;
}
export interface CreateCombinedRegionPureReturnValue<T> extends Omit<CreateCombinedRegionReturnValue<T>, 'set' | 'load' | 'loadBy' | 'getValue' | 'useValue'> {
    set: <K extends keyof T>(key: K, resultOrFunc: T[K] | ResultFuncPure<T[K]>) => T[K];
    load: <K extends keyof T, TParams = void, TResult = unknown>(key: K, asyncFunction: AsyncFunctionOrPromise<TParams, TResult>, optionOrReducer?: OptionOrReducer<TParams, TResult, T[K]>, exOption?: LoadOption<TParams, TResult, T[K]>) => Promise<T[K]>;
    loadBy: <K extends keyof T, TParams = void, TResult = unknown>(key: K, asyncFunction: AsyncFunctionOrPromise<TParams, TResult>, optionOrReducer?: OptionOrReducer<TParams, TResult, T[K]>, exOption?: LoadOption<TParams, TResult, T[K]>) => (params: TParams) => Promise<T[K]>;
    getValue: <K extends keyof T>(key: K) => T[K];
    useValue: <K extends keyof T>(key: K) => T[K];
}
/** @deprecated */
declare function createCombinedRegion<T>(initialValue: void | undefined, option?: RegionOption): CreateCombinedRegionReturnValue<T>;
/** @deprecated */
declare function createCombinedRegion<T>(initialValue: T, option?: RegionOption): CreateCombinedRegionPureReturnValue<T>;
export default createCombinedRegion;
