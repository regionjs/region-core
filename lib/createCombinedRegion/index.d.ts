/// <reference types="react" />
import { LegacyKey, LoadOption, ConnectOption, AnyObject, PropsKey } from '../types';
declare const createCombinedRegion: () => {
    private_store: {
        getAttribute: (key: string, attribute: PropsKey) => any;
        private_setState: (value: import("../types").State) => void;
        load: (payload: import("../types").LoadPayload) => import("../types").State;
        set: (payload: import("../types").Payload) => import("../types").State;
        setCache: (payload: import("../types").Payload) => import("../types").State;
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
