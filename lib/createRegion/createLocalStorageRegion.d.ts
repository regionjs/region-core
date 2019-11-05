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
    getLoading: () => any;
    getError: () => any;
    getFetchTime: () => any;
    useProps: () => import("../types").Props;
    useValue: () => any;
    useLoading: () => any;
    useError: () => any;
    useFetchTime: () => any;
    connect: (Component: any, alias?: string) => (ownProps: import("../types").Props) => JSX.Element;
};
export default createLocalStorageRegion;
