import { Key, State, Props, SelectPropsParams } from '../types';
export declare const selectProps: ({ keys, loadings, results, fetchTimes, errors }: SelectPropsParams) => Props;
export declare const formatLoading: (loading?: boolean | undefined, strictLoading?: boolean | undefined) => boolean | undefined;
export declare const mapValues: (state: State | undefined, category: string, key: string | string[], format?: (v: any) => any) => any;
export declare const formatKeys: (key: Key) => {
    keys: string[];
    loadings: string[];
    results: string[];
    fetchTimes: string[];
    errors: string[];
};
