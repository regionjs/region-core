import { LoadOptions } from '../types/interfaces';
import RegionPrivate from './RegionPrivate';
declare class RegionPublic extends RegionPrivate {
    set: (key: string, result: any, option?: LoadOptions | undefined) => any;
    /**
     * @param format A function format result to other data structure
     */
    setBy: (key: string, { format }?: LoadOptions) => (result: any) => any;
    reset: () => void;
    load: (key: string, asyncFunction: any, option?: LoadOptions) => Promise<any>;
    /**
     * @param params asyncFunction may need
     * @param format A function format result to other data structure
     * @param forceUpdate true | false
     */
    loadBy: (key: string, asyncFunction: any, option?: LoadOptions) => (params: any) => Promise<any>;
}
export default RegionPublic;
