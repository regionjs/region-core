/// <reference types="react" />
import { LegacyKey, LoadOption, ConnectOption, AnyObject } from '../types';
declare const createCombinedRegion: () => {
    private_store: {
        getState: () => import("../types").State;
        load: (payload: import("../types").LoadPayload) => import("../types").State;
        set: (payload: import("../types").Payload, cache?: boolean | undefined) => import("../types").State;
        reset: () => void;
        subscribe: (listener: () => void) => () => void;
    };
    set: (key: string, resultOrFunc: any) => any;
    reset: () => void;
    load: (key: string, asyncFunction: any, optionOrReducer?: LoadOption | ((state: any, action: any, params: any) => any) | undefined, exOption?: LoadOption | undefined) => Promise<any>;
    loadBy: (key: string, asyncFunction: any, optionOrReducer?: LoadOption | ((state: any, action: any, params: any) => any) | undefined, exOption?: LoadOption | undefined) => (params?: any) => Promise<any>;
    getProps: (key: LegacyKey) => {
        loading: boolean;
        fetchTime: number | undefined;
        error: Error | undefined;
    } & AnyObject;
    getValue: (key: string | string[]) => any;
    getLoading: (key: string | string[]) => boolean;
    getError: (key: string | string[]) => Error | undefined;
    getFetchTime: (key: string | string[]) => number | undefined;
    connectWith: (key: LegacyKey, Display: any, option?: ConnectOption | undefined) => (ownProps: AnyObject) => JSX.Element;
    connect: (key: LegacyKey, { Loading, Error: ErrorComponent }?: ConnectOption) => (Display?: any) => (ownProps: AnyObject) => JSX.Element;
    useProps: (key: string | string[]) => AnyObject;
    useValue: (key: string | string[]) => any;
    useLoading: (key: string | string[]) => boolean;
    useError: (key: string | string[]) => Error | undefined;
    useFetchTime: (key: string | string[]) => number | undefined;
};
export default createCombinedRegion;
