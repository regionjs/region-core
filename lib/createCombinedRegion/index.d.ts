/// <reference types="react" />
import { ResultOrFunc, LoadOption, ConnectOption, AsyncFunction, LoadPayload } from '../types';
declare const createCombinedRegion: <T>() => {
    private_store: {
        getAttribute: <K extends keyof T, A extends "error" | "loading" | "result" | "id" | "promise" | "fetchTime" | "results">(key: K, attribute: A) => import("../types").Props<T[K]>[A];
        private_setState: (value: import("../types").State<T>) => void;
        load: <K_1 extends keyof T, TResult>(payload: LoadPayload<K_1, TResult>) => import("../types").State<T>;
        set: <K_2 extends keyof T>(payload: import("../types").Payload<T, K_2>) => import("../types").State<T>;
        setCache: <K_3 extends keyof T>(payload: import("../types").Payload<T, K_3>) => import("../types").State<T>;
        reset: () => void;
        subscribe: (listener: () => void) => () => void;
    };
    set: <K_4 extends keyof T>(key: K_4, resultOrFunc: ResultOrFunc<T[K_4]>) => T[K_4];
    reset: () => void;
    load: <K_5 extends keyof T, TParams = void, TResult_1 = unknown>(key: K_5, asyncFunction: AsyncFunction<TParams, TResult_1>, optionOrReducer?: LoadOption<TParams, TResult_1, T[K_5]> | ((state: T[K_5] | undefined, result: TResult_1, params: TParams) => T[K_5]) | undefined, exOption?: LoadOption<TParams, TResult_1, T[K_5]> | undefined) => Promise<T[K_5] | undefined>;
    loadBy: <K_6 extends keyof T, TParams_1 = void, TResult_2 = unknown>(key: K_6, asyncFunction: AsyncFunction<TParams_1, TResult_2>, optionOrReducer?: LoadOption<TParams_1, TResult_2, T[K_6]> | ((state: T[K_6] | undefined, result: TResult_2, params: TParams_1) => T[K_6]) | undefined, exOption?: LoadOption<TParams_1, TResult_2, T[K_6]> | undefined) => (params: TParams_1) => Promise<T[K_6] | undefined>;
    getProps: <K_7 extends keyof T>(key: K_7) => any;
    getMap: <K_8 extends keyof T>(key: K_8) => {
        [key: string]: T[K_8];
    };
    getId: <K_9 extends keyof T>(key: K_9) => string | undefined;
    getValue: <K_10 extends keyof T>(key: K_10) => T[K_10] | undefined;
    getLoading: <K_11 extends keyof T>(key: K_11) => boolean;
    getError: <K_12 extends keyof T>(key: K_12) => Error | undefined;
    getFetchTime: <K_13 extends keyof T>(key: K_13) => number | undefined;
    connectWith: <K_14 extends keyof T>(key: K_14, Display: any, option?: ConnectOption | undefined) => (ownProps: any) => JSX.Element;
    connect: <K_15 extends keyof T>(key: K_15, { Loading, Error: ErrorComponent }?: ConnectOption) => (Display?: any) => (ownProps: any) => JSX.Element;
    useProps: <K_16 extends keyof T>(key: K_16) => any;
    useValue: <K_17 extends keyof T>(key: K_17) => T[K_17] | undefined;
    useMap: <K_18 extends keyof T>(key: K_18) => {
        [key: string]: T[K_18];
    };
    useId: <K_19 extends keyof T>(key: K_19) => string | undefined;
    useLoading: <K_20 extends keyof T>(key: K_20) => boolean;
    useError: <K_21 extends keyof T>(key: K_21) => Error | undefined;
    useFetchTime: <K_22 extends keyof T>(key: K_22) => number | undefined;
};
export default createCombinedRegion;
