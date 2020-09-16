import { FC } from 'react';
import { ResultFunc, ResultFuncPure, AsyncFunctionOrPromise, LoadOption, OptionOrReducer, ConnectOption } from '../types';
export interface CreateMappedRegionReturnValue<K, V> {
    private_setState_just_for_test: (value: any) => void;
    set: (key: K, resultOrFunc: V | ResultFunc<V>) => V;
    reset: () => void;
    load: <TParams = void, TResult = unknown>(key: K | ((params: TParams) => K), asyncFunction: AsyncFunctionOrPromise<TParams, TResult>, optionOrReducer?: OptionOrReducer<TParams, TResult, V>, exOption?: LoadOption<TParams, TResult, V>) => Promise<V | void>;
    loadBy: <TParams = void, TResult = unknown>(key: K | ((params: TParams) => K), asyncFunction: AsyncFunctionOrPromise<TParams, TResult>, optionOrReducer?: OptionOrReducer<TParams, TResult, V>, exOption?: LoadOption<TParams, TResult, V>) => (params: TParams) => Promise<V | void>;
    getValue: (key: K) => V | undefined;
    getLoading: (key: K | K[]) => boolean;
    getError: (key: K | K[]) => Error | undefined;
    getFetchTime: (key: K | K[]) => number | undefined;
    getProps: (key: K | K[]) => any;
    connectWith: (key: K, Display: any, option?: ConnectOption) => FC<any>;
    connect: (key: K, option?: ConnectOption) => (Display?: any) => FC<any>;
    useValue: (key: K) => V | undefined;
    useLoading: (key: K | K[]) => boolean;
    useError: (key: K | K[]) => Error | undefined;
    useFetchTime: (key: K | K[]) => number | undefined;
    useProps: (key: K | K[]) => any;
}
export interface CreateMappedRegionPureReturnValue<K, V> extends Omit<CreateMappedRegionReturnValue<K, V>, 'set' | 'load' | 'loadBy' | 'getValue' | 'useValue'> {
    set: (key: K, resultOrFunc: V | ResultFuncPure<V>) => V;
    load: <TParams = void, TResult = unknown>(key: K | ((params: TParams) => K), asyncFunction: AsyncFunctionOrPromise<TParams, TResult>, optionOrReducer?: OptionOrReducer<TParams, TResult, V>, exOption?: LoadOption<TParams, TResult, V>) => Promise<V>;
    loadBy: <TParams = void, TResult = unknown>(key: K | ((params: TParams) => K), asyncFunction: AsyncFunctionOrPromise<TParams, TResult>, optionOrReducer?: OptionOrReducer<TParams, TResult, V>, exOption?: LoadOption<TParams, TResult, V>) => (params: TParams) => Promise<V>;
    getValue: (key: K) => V;
    useValue: (key: K) => V;
}
declare function createMappedRegion<K, V>(initialValue: void): CreateMappedRegionReturnValue<K, V>;
declare function createMappedRegion<K, V>(initialValue: V): CreateMappedRegionPureReturnValue<K, V>;
export default createMappedRegion;
