import { Props, SelectPropsParams } from '../types/interfaces';
export declare const selectProps: ({ keys, loadings, results, fetchTimes, errors }: SelectPropsParams) => Props;
export declare const formatLoading: (loading?: boolean | undefined, strictLoading?: boolean | undefined) => boolean | undefined;
declare type Values = {
    [key: string]: any;
};
export declare const mapValues: (values: Values | undefined, path: string | string[], format?: (v: any) => any) => any;
export {};
