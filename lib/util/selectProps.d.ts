import { Key, State, Props } from '../types';
export declare const selectLoading: (loadings: (boolean | undefined)[]) => boolean | undefined;
export declare const selectError: (errors: Error[]) => string | undefined;
export declare const selectFetchTime: (fetchTimes: number[]) => number | undefined;
export declare const selectResult: (keys: string[], results: any[]) => Props;
export declare const formatLoading: (loading?: boolean | undefined, strictLoading?: boolean | undefined) => boolean | undefined;
export declare const mapValues: (state: State | undefined, category: string, key: string | string[], format?: (v: any) => any) => any;
export declare const formatKeys: (key: Key) => {
    keys: string[];
    loadings: string[];
    results: string[];
    fetchTimes: string[];
    errors: string[];
};
