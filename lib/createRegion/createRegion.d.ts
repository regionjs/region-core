import { FC } from 'react';
import { AsyncFunctionOrPromise, LoadOption, OptionOrReducer, ResultFunc, ResultFuncPure } from '../types';
export interface CreateRegionReturnValue<V> {
    set: (resultOrFunc: V | ResultFunc<V>) => V;
    load: <TParams = void, TResult = unknown>(asyncFunction: AsyncFunctionOrPromise<TParams, TResult>, optionOrReducer?: OptionOrReducer<TParams, TResult, V>, exOption?: LoadOption<TParams, TResult, V>) => Promise<V | void>;
    loadBy: <TParams = void, TResult = unknown>(asyncFunction: AsyncFunctionOrPromise<TParams, TResult>, optionOrReducer?: OptionOrReducer<TParams, TResult, V>, exOption?: LoadOption<TParams, TResult, V>) => (params: TParams) => Promise<V | void>;
    getMap: () => {
        [key: string]: V;
    };
    getId: () => string | undefined;
    getValue: () => V | undefined;
    getLoading: () => boolean;
    getError: () => Error | undefined;
    getFetchTime: () => number | undefined;
    getProps: () => any;
    connect: (Component: any, alias?: string) => FC<any>;
    useMap: () => {
        [key: string]: V;
    };
    useId: () => string | undefined;
    useValue: () => V | undefined;
    useLoading: () => boolean;
    useError: () => Error | undefined;
    useFetchTime: () => number | undefined;
    useProps: () => any;
}
export interface CreateRegionPureReturnValue<V> extends Omit<CreateRegionReturnValue<V>, 'set' | 'load' | 'loadBy' | 'getValue' | 'useValue'> {
    set: (resultOrFunc: V | ResultFuncPure<V>) => V;
    load: <TParams = void, TResult = unknown>(asyncFunction: AsyncFunctionOrPromise<TParams, TResult>, optionOrReducer?: OptionOrReducer<TParams, TResult, V>, exOption?: LoadOption<TParams, TResult, V>) => Promise<V>;
    loadBy: <TParams = void, TResult = unknown>(asyncFunction: AsyncFunctionOrPromise<TParams, TResult>, optionOrReducer?: OptionOrReducer<TParams, TResult, V>, exOption?: LoadOption<TParams, TResult, V>) => (params: TParams) => Promise<V>;
    getValue: () => V;
    useValue: () => V;
}
declare function createRegion<V>(initialValue: void): CreateRegionReturnValue<V>;
declare function createRegion<V>(initialValue: V): CreateRegionPureReturnValue<V>;
export default createRegion;
