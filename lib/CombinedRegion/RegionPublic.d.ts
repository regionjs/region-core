import RegionPrivate from './RegionPrivate';
import { Key, LoadOption, Reducer } from '../types';
declare class RegionPublic extends RegionPrivate {
    /**
     * @param key string
     * @param result any
     * @param option
     * @param option.format (result, snapshot) => any
     */
    set: (key: string, result: any, option?: LoadOption) => any;
    /**
     * @param key string
     * @param option
     * @param option.format (result, snapshot) => any | A function format result to other data structure
     */
    setBy: (key: string, option?: LoadOption) => (result: any) => any;
    reset: () => void;
    load: (key: string, asyncFunction: any, optionOrReducer?: LoadOption | Reducer | undefined, exOption?: LoadOption | undefined) => Promise<any>;
    loadBy: (key: string, asyncFunction: any, optionOrReducer?: LoadOption | Reducer | undefined, exOption?: LoadOption | undefined) => (params: any) => Promise<any>;
    getProps: (key: Key) => {
        loading: boolean | undefined;
        fetchTime: number | undefined;
        error: Error | undefined;
    } & import("../types").Props;
    getValue: (key: string) => any;
    getLoading: (key: string) => any;
    getError: (key: string) => any;
    getFetchTime: (key: string) => any;
}
export default RegionPublic;
