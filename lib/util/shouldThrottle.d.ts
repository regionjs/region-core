interface Params {
    asyncFunction?: any;
    forceUpdate?: any;
    key?: any;
    snapshot?: any;
    expiredTime?: any;
    getFetchTimes?: any;
}
export declare const shouldThrottle: ({ asyncFunction, forceUpdate, key, snapshot, expiredTime, getFetchTimes }: Params) => boolean;
export {};
