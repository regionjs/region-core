import CombinedRegion from '../CombinedRegion';
import { LoadOption } from '../types';
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
        error: string | undefined;
    } & import("../types").Props;
    getValue: () => {
        loading: boolean | undefined;
        fetchTime: number | undefined;
        error: string | undefined;
    } & import("../types").Props;
    useProps: () => import("../types").Props;
    useValue: () => any;
}
declare const createRegion: (initialValue: any) => Region;
export default createRegion;
