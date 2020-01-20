/// <reference types="react" />
declare const createLocalStorageRegion: (key: string, fallbackValue: any) => {
    set: (resultOrFunc: any) => any;
    load: <TParams = void, TResult = unknown>(asyncFunction: import("../types").AsyncFunction<TParams, TResult>, option?: import("../types").OptionOrReducer<TParams, TResult, any>, exOption?: import("../types").LoadOption<TParams, TResult, any> | undefined) => Promise<any>;
    loadBy: <TParams_1 = void, TResult_1 = unknown>(asyncFunction: import("../types").AsyncFunction<TParams_1, TResult_1>, option?: import("../types").OptionOrReducer<TParams_1, TResult_1, any>, exOption?: import("../types").LoadOption<TParams_1, TResult_1, any> | undefined) => (params: TParams_1) => Promise<any>;
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
