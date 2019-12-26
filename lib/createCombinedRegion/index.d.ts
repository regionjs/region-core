/// <reference types="react" />
import { ResultOrFunc, LoadOption, ConnectOption, AsyncFunction } from '../types';
declare const createCombinedRegion: <T>() => {
    private_store: {
        getAttribute: <K extends keyof T, A extends "error" | "loading" | "result" | "id" | "promise" | "fetchTime" | "results">(key: K, attribute: A) => import("../types").Props<T[K]>[A];
        private_setState: (value: import("../types").State<T>) => void;
        load: <K_1 extends keyof T>(payload: import("../types").LoadPayload<T, K_1>) => import("../types").State<T>;
        set: <K_2 extends keyof T>(payload: import("../types").Payload<T, K_2>) => import("../types").State<T>;
        setCache: <K_3 extends keyof T>(payload: import("../types").Payload<T, K_3>) => import("../types").State<T>;
        reset: () => void;
        subscribe: (listener: () => void) => () => void;
    };
    set: <K_4 extends keyof T>(key: K_4, resultOrFunc: ResultOrFunc<T[K_4]>) => T[K_4];
    reset: () => void;
    load: <TParams, K_5 extends keyof T>(key: K_5, asyncFunction: AsyncFunction<TParams, T[K_5]>, optionOrReducer?: LoadOption<TParams, T[K_5]> | ((state: T[K_5] | undefined, result: T[K_5], params: TParams) => T[K_5]) | undefined, exOption?: LoadOption<TParams, T[K_5]> | undefined) => Promise<T[K_5] | undefined>;
    loadBy: <TParams_1, K_6 extends keyof T>(key: K_6, asyncFunction: AsyncFunction<TParams_1, T[K_6]>, optionOrReducer?: LoadOption<TParams_1, T[K_6]> | ((state: T[K_6] | undefined, result: T[K_6], params: TParams_1) => T[K_6]) | undefined, exOption?: LoadOption<TParams_1, T[K_6]> | undefined) => (params?: TParams_1 | undefined) => Promise<T[K_6] | undefined>;
    getProps: <K_7 extends keyof T>(key: K_7 | K_7[]) => any;
    getMap: {
        <K_8 extends keyof T>(key: K_8): {
            [key: string]: T[K_8];
        };
        <K_9 extends keyof T>(key: K_9[]): {
            [key: string]: T[K_9];
        }[];
    };
    getId: {
        <K_10 extends keyof T>(key: K_10): string | undefined;
        <K_11 extends keyof T>(key: K_11[]): (string | undefined)[];
    };
    getValue: {
        <K_12 extends keyof T>(key: K_12): T[K_12] | undefined;
        <K_13 extends keyof T>(key: K_13[]): (T[K_13] | undefined)[];
    };
    getLoading: <K_14 extends keyof T>(key: K_14 | K_14[]) => boolean;
    getError: <K_15 extends keyof T>(key: K_15 | K_15[]) => Error | undefined;
    getFetchTime: <K_16 extends keyof T>(key: K_16 | K_16[]) => number | undefined;
    connectWith: <K_17 extends keyof T>(key: K_17 | K_17[], Display: any, option?: ConnectOption | undefined) => (ownProps: any) => JSX.Element;
    connect: <K_18 extends keyof T>(key: K_18 | K_18[], { Loading, Error: ErrorComponent }?: ConnectOption) => (Display?: any) => (ownProps: any) => JSX.Element;
    useProps: <K_19 extends keyof T>(key: K_19 | K_19[]) => any;
    useValue: <K_20 extends keyof T>(key: K_20 | K_20[]) => T[any] | undefined;
    useMap: <K_21 extends keyof T>(key: K_21 | K_21[]) => {
        [key: string]: T[any];
    };
    useId: <K_22 extends keyof T>(key: K_22 | K_22[]) => string | undefined;
    useLoading: <K_23 extends keyof T>(key: K_23 | K_23[]) => boolean;
    useError: <K_24 extends keyof T>(key: K_24 | K_24[]) => Error | undefined;
    useFetchTime: <K_25 extends keyof T>(key: K_25 | K_25[]) => number | undefined;
};
export default createCombinedRegion;
