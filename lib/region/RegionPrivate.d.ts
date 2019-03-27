import RegionInitial from './RegionInitial';
declare class RegionPrivate extends RegionInitial {
    private_getState: () => any;
    private_getLoading: (path: string | string[]) => boolean | undefined;
    private_getFetchTimes: (path: string | string[]) => any;
    private_getResults: (path: string | string[]) => any;
    private_getError: (path: string | string[]) => any;
    /**
     * @todo move to RegionPublic after private_selectorFactory removed
     */
    getProps: (key: any) => object;
    private_selectorFactory: (key: any) => (state?: any, ownProps?: any) => any;
}
export default RegionPrivate;
