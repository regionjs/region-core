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
    getLoading: (key: string | string[]) => boolean | undefined;
    getError: (key: string | string[]) => Error | undefined;
    getFetchTime: (key: string | string[]) => number | undefined;
    connectWith: (key: LegacyKey, Display: any, option?: ConnectOption | undefined) => (ownProps: Props) => JSX.Element;
    connect: (key: LegacyKey, { Loading, Error: ErrorComponent }?: ConnectOption) => (Display?: any) => (ownProps: Props) => JSX.Element;
    useProps: (key: string | string[]) => Props;
    useValue: (key: string | string[]) => any;
    useLoading: (key: string | string[]) => boolean | undefined;
    useError: (key: string | string[]) => Error | undefined;
    useFetchTime: (key: string | string[]) => number | undefined;
};
export default createCombinedRegion;
