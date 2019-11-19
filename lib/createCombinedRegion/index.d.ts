/// <reference types="react" />
import { LegacyKey, LoadOption, Props, ConnectOption } from '../types';
declare const createCombinedRegion: () => {
    private_store: {
        getState: () => {};
        load: (payload: import("../types").LoadPayload) => {};
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
    loadBy: (key: string, asyncFunction: any, optionOrReducer?: LoadOption | ((state: any, action: any, params: any) => any) | undefined, exOption?: LoadOption | undefined) => (params?: any) => Promise<any>;
    getProps: (key: LegacyKey) => {
        loading: boolean | undefined;
        fetchTime: number | undefined;
        error: Error | undefined;
    } & Props;
    getValue: (key: string | string[]) => any;
    getLoading: (key: string | string[]) => any;
    getError: (key: string | string[]) => any;
    getFetchTime: (key: string | string[]) => any;
    connectWith: (key: LegacyKey, Display: any, option?: ConnectOption | undefined) => (ownProps: Props) => JSX.Element;
    connect: (key: LegacyKey, { Loading, Error: ErrorComponent }?: ConnectOption) => (Display?: any) => (ownProps: Props) => JSX.Element;
    useProps: (key: LegacyKey) => Props;
    useValue: (key: LegacyKey) => any;
    useLoading: (key: LegacyKey) => any;
    useError: (key: LegacyKey) => any;
    useFetchTime: (key: LegacyKey) => any;
};
export default createCombinedRegion;
