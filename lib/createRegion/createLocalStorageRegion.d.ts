/// <reference types="react" />
declare const createLocalStorageRegion: (key: string, fallbackValue: any) => {
    set: (resultOrFunc: any) => any;
    load: (asyncFunction: any, option?: import("../types").OptionOrReducer, exOption?: import("../types").LoadOption | undefined) => Promise<any>;
    loadBy: (asyncFunction: any, option?: import("../types").OptionOrReducer, exOption?: import("../types").LoadOption | undefined) => (params?: any) => Promise<any>;
    getProps: () => {
        loading: boolean;
        fetchTime: number | undefined;
        error: Error | undefined;
    } & import("../types").AnyObject;
    getMap: () => any;
    getId: () => any;
    getValue: () => any;
    getLoading: () => boolean;
    getError: () => Error | undefined;
    getFetchTime: () => number | undefined;
    useProps: () => import("../types").AnyObject;
    useMap: () => any;
    useId: () => any;
    useValue: () => any;
    useLoading: () => boolean;
    useError: () => Error | undefined;
    useFetchTime: () => number | undefined;
    connect: (Component: any, alias?: string) => (ownProps: import("../types").Props) => JSX.Element;
};
export default createLocalStorageRegion;
