import { LegacyKey, AnyObject } from '../types';
export declare const selectLoading: (loadings: (number | undefined)[]) => boolean;
export declare const selectError: (errors: Error[]) => Error | undefined;
export declare const selectFetchTime: (fetchTimes: (number | undefined)[]) => number | undefined;
export declare const selectResult: (keys: string[], results: any[]) => AnyObject;
export declare const formatKeys: (key: LegacyKey) => {
    keys: string[];
    loadings: string[];
    results: string[];
    fetchTimes: string[];
    errors: string[];
};
