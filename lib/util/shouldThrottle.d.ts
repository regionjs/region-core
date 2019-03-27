interface Params {
    asyncFunction?: any;
    forceUpdate?: any;
    key?: any;
    snapshot?: any;
    id?: any;
    expiredTime?: any;
    getFetchTimes?: any;
}
export declare const shouldThrottle: ({ asyncFunction, forceUpdate, key, snapshot, id, expiredTime, getFetchTimes }: Params) => boolean;
export {};
