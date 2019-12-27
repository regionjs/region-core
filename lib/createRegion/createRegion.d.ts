/// <reference types="react" />
import { LoadOption, OptionOrReducer, ResultOrFunc } from '../types';
export declare const createRegion: <V>(initialValue?: V | undefined) => {
    set: (resultOrFunc: ResultOrFunc<V>) => V;
    load: <TParams, TResult>(asyncFunction: import("../types").AsyncFunction<TParams, TResult>, option?: OptionOrReducer<TParams, TResult, V>, exOption?: LoadOption<TParams, TResult, V> | undefined) => Promise<V | undefined>;
    loadBy: <TParams_1, TResult_1>(asyncFunction: import("../types").AsyncFunction<TParams_1, TResult_1>, option?: OptionOrReducer<TParams_1, TResult_1, V>, exOption?: LoadOption<TParams_1, TResult_1, V> | undefined) => (params?: TParams_1 | undefined) => Promise<V | undefined>;
    getProps: () => any;
    getMap: () => {
        [key: string]: V;
    };
    getId: () => string | undefined;
    getValue: () => V | undefined;
    getLoading: () => boolean;
    getError: () => Error | undefined;
    getFetchTime: () => number | undefined;
    useProps: () => any;
    useMap: () => {
        [key: string]: any;
    };
    useId: () => string | undefined;
    useValue: () => any;
    useLoading: () => boolean;
    useError: () => Error | undefined;
    useFetchTime: () => number | undefined;
    connect: (Component: any, alias?: string) => (ownProps: any) => JSX.Element;
};
export default createRegion;
