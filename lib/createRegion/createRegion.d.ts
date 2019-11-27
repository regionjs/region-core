/// <reference types="react" />
import { LoadOption, OptionOrReducer } from '../types';
export declare const createRegion: (initialValue?: any) => {
    set: (resultOrFunc: any) => any;
    load: (asyncFunction: any, option?: OptionOrReducer, exOption?: LoadOption | undefined) => Promise<any>;
    loadBy: (asyncFunction: any, option?: OptionOrReducer, exOption?: LoadOption | undefined) => (params?: any) => Promise<any>;
    getProps: () => {
        loading: boolean;
        fetchTime: number | undefined;
        error: Error | undefined;
    } & import("../types").AnyObject;
    getValue: () => any;
    getLoading: () => boolean;
    getError: () => Error | undefined;
    getFetchTime: () => number | undefined;
    useProps: () => import("../types").AnyObject;
    useValue: () => any;
    useLoading: () => boolean;
    useError: () => Error | undefined;
    useFetchTime: () => number | undefined;
    connect: (Component: any, alias?: string) => (ownProps: import("../types").Props) => JSX.Element;
};
export default createRegion;
