import RegionInitial from './RegionInitial';
declare class RegionPrivate extends RegionInitial {
    private_getState: () => any;
    private_getLoadings: (key: string | string[]) => any;
    private_getResults: (key: string | string[]) => any;
    private_getFetchTimes: (key: string | string[]) => any;
    private_getErrors: (key: string | string[]) => any;
}
export default RegionPrivate;
