/// <reference types="react" />
import { Key, LoadOption, Props, ConnectOption } from '../types';
declare const createCombinedRegion: () => {
    private_store: {
        getState: () => {};
        load: (payload: import("../types").Payload) => {};
        set: (payload: import("../types").Payload) => {};
        reset: () => void;
        subscribe: (listener: () => void) => () => void;
    };
    private_getState: () => {};
    private_getLoadings: (key: string | string[]) => any;
    private_getResults: (key: string | string[]) => any;
    private_getFetchTimes: (key: string | string[]) => any;
    private_getErrors: (key: string | string[]) => any;
    set: (key: string, resultOrFunc: any) => any;
    reset: () => void;
    load: (key: string, asyncFunction: any, optionOrReducer?: LoadOption | ((state: any, action: any, params: any) => any) | undefined, exOption?: LoadOption | undefined) => Promise<any>;
    loadBy: (key: string, asyncFunction: any, optionOrReducer?: LoadOption | ((state: any, action: any, params: any) => any) | undefined, exOption?: LoadOption | undefined) => (params: any) => Promise<any>;
    getProps: (key: Key) => {
        loading: boolean | undefined;
        fetchTime: number | undefined;
        error: Error | undefined;
    } & Props;
    getValue: (key: string) => any;
    getLoading: (key: string) => any;
    getError: (key: string) => any;
    getFetchTime: (key: string) => any;
    connectWith: (key: Key, Display: any, option?: ConnectOption | undefined) => (ownProps: Props) => JSX.Element;
    connect: (key: Key, { Loading, Error: ErrorComponent }?: ConnectOption) => (Display?: any) => (ownProps: Props) => JSX.Element;
    useProps: (key: Key) => Props;
    useValue: (key: Key) => any;
    useLoading: (key: Key) => any;
    useError: (key: Key) => any;
    useFetchTime: (key: Key) => any;
};
export default createCombinedRegion;
