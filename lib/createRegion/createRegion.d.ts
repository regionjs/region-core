/// <reference types="react" />
import { LoadOption, OptionOrReducer } from '../types';
export declare class Region {
    region: {
        name: string;
        private_actionTypes: {
            LOAD: string;
            SET: string;
            RESET: string;
        };
        expiredTime: number;
        enableLog: boolean;
        strictLoading: boolean;
        private_reducer: (state: import("../types").State | undefined, action: import("../types").Action) => import("../types").State;
        private_store: import("redux").Store<any, import("redux").AnyAction>;
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
        getProps: (key: import("../types").Key) => {
            loading: boolean | undefined;
            fetchTime: number | undefined;
            error: Error | undefined;
        } & import("../types").Props;
        getValue: (key: string) => any;
        getLoading: (key: string) => any;
        getError: (key: string) => any;
        getFetchTime: (key: string) => any;
        connectWith: (key: import("../types").Key, Display: any, option?: import("../types").ConnectOption | undefined) => ((ownProps: import("../types").Props) => JSX.Element) | null;
        connect: (key: import("../types").Key, { Loading, Error }?: import("../types").ConnectOption) => (Display?: any) => ((ownProps: import("../types").Props) => JSX.Element) | null;
        useProps: (key: import("../types").Key) => import("../types").Props;
        useValue: (key: import("../types").Key) => any;
        useLoading: (key: import("../types").Key) => any;
        useError: (key: import("../types").Key) => any;
        useFetchTime: (key: import("../types").Key) => any;
    };
    set: (result: any, option?: LoadOption) => any;
    setBy: (option?: LoadOption) => (result: any) => any;
    load: (asyncFunction: any, option?: OptionOrReducer, exOption?: LoadOption | undefined) => Promise<any>;
    loadBy: (asyncFunction: any, option?: OptionOrReducer, exOption?: LoadOption | undefined) => (params: any) => Promise<any>;
    getProps: () => {
        loading: boolean | undefined;
        fetchTime: number | undefined;
        error: Error | undefined;
    } & import("../types").Props;
    getValue: () => any;
    getLoading: () => any;
    getError: () => any;
    getFetchTime: () => any;
    useProps: () => import("../types").Props;
    useValue: () => any;
    useLoading: () => any;
    useError: () => any;
    useFetchTime: () => any;
    connect: (Component: any, alias?: string) => (ownProps: import("../types").Props) => JSX.Element;
}
declare const createRegion: (initialValue?: any) => Region;
export default createRegion;
