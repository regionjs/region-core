import RegionInitial from './RegionInitial';
declare class RegionPrivate extends RegionInitial {
    private_getState: () => any;
    private_getLoadings: (path: string | string[]) => any;
    private_getFetchTimes: (path: string | string[]) => any;
    private_getResults: (path: string | string[]) => any;
    private_getErrors: (path: string | string[]) => any;
}
export default RegionPrivate;
