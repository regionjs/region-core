/// <reference types="react" />
import { Store } from 'redux';
import { Key, LoadOption, State, Action, Props, ConnectOption } from '../types';
declare const createCombinedRegion: () => {
    private_actionTypes: {
        LOAD: string;
        SET: string;
        RESET: string;
    };
    private_reducer: (state: State | undefined, action: Action) => State;
    private_store: Store<any, import("redux").AnyAction>;
    private_getState: () => any;
    private_getLoadings: (key: string | string[]) => any;
    private_getResults: (key: string | string[]) => any;
    private_getFetchTimes: (key: string | string[]) => any;
    private_getErrors: (key: string | string[]) => any;
    set: (key: string, result: any, option?: LoadOption) => any;
    setBy: (key: string, option?: LoadOption) => (result: any) => any;
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
    connectWith: (key: Key, Display: any, option?: ConnectOption | undefined) => ((ownProps: Props) => JSX.Element) | null;
    connect: (key: Key, { Loading, Error }?: ConnectOption) => (Display?: any) => ((ownProps: Props) => JSX.Element) | null;
    useProps: (key: Key) => Props;
    useValue: (key: Key) => any;
    useLoading: (key: Key) => any;
    useError: (key: Key) => any;
    useFetchTime: (key: Key) => any;
};
export default createCombinedRegion;
