/// <reference types="react" />
declare const createLocalStorageRegion: (key: string, fallbackValue: any) => {
    set: (resultOrFunc: any) => any;
    load: <TParams>(asyncFunction: import("../types").AsyncFunction<TParams, any>, option?: import("../types").OptionOrReducer<TParams, any>, exOption?: import("../types").LoadOption<TParams, any> | undefined) => Promise<any>;
    loadBy: <TParams_1>(asyncFunction: import("../types").AsyncFunction<TParams_1, any>, option?: import("../types").OptionOrReducer<TParams_1, any>, exOption?: import("../types").LoadOption<TParams_1, any> | undefined) => (params?: TParams_1 | undefined) => Promise<any>;
    getProps: () => any;
    getMap: () => {
        [key: string]: any;
    };
    getId: () => string | undefined;
    getValue: () => any;
    getLoading: () => boolean;
    getError: () => Error | undefined;
    getFetchTime: () => number | undefined;
    useProps: () => any;
    useMap: () => {
        [key: string]: any;
    };
    useId: () => string | undefined;
    useValue: () => any;
    useLoading: () => boolean;
    useError: () => Error | undefined;
    useFetchTime: () => number | undefined;
    connect: (Component: any, alias?: string) => (ownProps: any) => JSX.Element;
};
export default createLocalStorageRegion;
