/// <reference types="react" />
import CombinedRegion from '../CombinedRegion';
import { LoadOption, Props } from '../types';
export declare class Region {
    region: CombinedRegion;
    constructor();
    set: (result: any, option?: LoadOption) => any;
    setBy: (option?: LoadOption) => (result: any) => any;
    load: (asyncFunction: any, option?: LoadOption) => Promise<any>;
    loadBy: (asyncFunction: any, option?: LoadOption) => (params: any) => Promise<any>;
    getProps: () => {
        loading: boolean | undefined;
        fetchTime: number | undefined;
        error: Error | undefined;
    } & Props;
    getValue: () => any;
    getLoading: () => any;
    getError: () => any;
    getFetchTime: () => any;
    useProps: () => Props;
    useValue: () => any;
    useLoading: () => any;
    useError: () => any;
    useFetchTime: () => any;
    connect: (Component: any, alias?: string) => (ownProps: Props) => JSX.Element;
}
declare const createRegion: (initialValue?: any) => Region;
export default createRegion;
