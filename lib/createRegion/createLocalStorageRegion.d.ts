/// <reference types="react" />
declare const createLocalStorageRegion: (key: string, fallbackValue: any) => {
    set: (resultOrFunc: any) => any;
    load: (asyncFunction: any, option?: import("../types").OptionOrReducer, exOption?: import("../types").LoadOption | undefined) => Promise<any>;
    loadBy: (asyncFunction: any, option?: import("../types").OptionOrReducer, exOption?: import("../types").LoadOption | undefined) => (params?: any) => Promise<any>;
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
    useLoading: () => boolean | undefined;
    useError: () => Error | undefined;
    useFetchTime: () => number | undefined;
    connect: (Component: any, alias?: string) => (ownProps: import("../types").Props) => JSX.Element;
};
export default createLocalStorageRegion;
