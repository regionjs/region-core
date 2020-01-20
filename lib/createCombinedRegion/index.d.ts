/// <reference types="react" />
import { ResultOrFunc, LoadOption, ConnectOption, AsyncFunction } from '../types';
declare const createCombinedRegion: <T>() => {
    private_setState_just_for_test: (value: import("../types").State<T>) => void;
    set: <K extends keyof T>(key: K, resultOrFunc: ResultOrFunc<T[K]>) => T[K];
    reset: () => void;
    load: <K_1 extends keyof T, TParams = void, TResult = unknown>(key: K_1, asyncFunction: AsyncFunction<TParams, TResult>, optionOrReducer?: LoadOption<TParams, TResult, T[K_1]> | ((state: T[K_1] | undefined, result: TResult, params: TParams) => T[K_1]) | undefined, exOption?: LoadOption<TParams, TResult, T[K_1]> | undefined) => Promise<void | T[K_1]>;
    loadBy: <K_2 extends keyof T, TParams_1 = void, TResult_1 = unknown>(key: K_2, asyncFunction: AsyncFunction<TParams_1, TResult_1>, optionOrReducer?: LoadOption<TParams_1, TResult_1, T[K_2]> | ((state: T[K_2] | undefined, result: TResult_1, params: TParams_1) => T[K_2]) | undefined, exOption?: LoadOption<TParams_1, TResult_1, T[K_2]> | undefined) => (params: TParams_1) => Promise<void | T[K_2]>;
    getProps: <K_3 extends keyof T>(key: K_3) => any;
    getMap: <K_4 extends keyof T>(key: K_4) => {
        [key: string]: T[K_4];
    };
    getId: <K_5 extends keyof T>(key: K_5) => string | undefined;
    getValue: <K_6 extends keyof T>(key: K_6) => T[K_6] | undefined;
    getLoading: <K_7 extends keyof T>(key: K_7) => boolean;
    getError: <K_8 extends keyof T>(key: K_8) => Error | undefined;
    getFetchTime: <K_9 extends keyof T>(key: K_9) => number | undefined;
    connectWith: <K_10 extends keyof T>(key: K_10, Display: any, option?: ConnectOption | undefined) => (ownProps: any) => JSX.Element;
    connect: <K_11 extends keyof T>(key: K_11, { Loading, Error: ErrorComponent }?: ConnectOption) => (Display?: any) => (ownProps: any) => JSX.Element;
    useProps: <K_3 extends keyof T>(key: K_3) => any;
    useValue: <K_6 extends keyof T>(key: K_6) => T[K_6] | undefined;
    useMap: <K_4 extends keyof T>(key: K_4) => {
        [key: string]: T[K_4];
    };
    useId: <K_5 extends keyof T>(key: K_5) => string | undefined;
    useLoading: <K_7 extends keyof T>(key: K_7) => boolean;
    useError: <K_8 extends keyof T>(key: K_8) => Error | undefined;
    useFetchTime: <K_9 extends keyof T>(key: K_9) => number | undefined;
};
export default createCombinedRegion;
