/// <reference types="react" />
import { LoadOption, OptionOrReducer } from '../types';
export declare const createRegion: (initialValue?: any) => {
    set: (resultOrFunc: any) => any;
    load: (asyncFunction: any, option?: OptionOrReducer, exOption?: LoadOption | undefined) => Promise<any>;
    loadBy: (asyncFunction: any, option?: OptionOrReducer, exOption?: LoadOption | undefined) => (params?: any) => Promise<any>;
    getProps: () => {
        loading: boolean | undefined;
        fetchTime: number | undefined;
        error: Error | undefined;
    } & import("../types").Props;
    getValue: () => any;
    getLoading: () => boolean | undefined;
    getError: () => Error | undefined;
    getFetchTime: () => number | undefined;
    useProps: () => import("../types").Props;
    useValue: () => any;
    useLoading: () => any;
    useError: () => any;
    useFetchTime: () => any;
    connect: (Component: any, alias?: string) => (ownProps: import("../types").Props) => JSX.Element;
};
export default createRegion;
