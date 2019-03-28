import { Props } from '../types/interfaces';
export declare const selectProps: (keys: string | string[], loading: boolean | undefined, results: any, error: any) => Props;
export declare const formatLoading: (loading?: boolean | undefined, strictLoading?: boolean | undefined) => boolean | undefined;
declare type Values = {
    [key: string]: any;
};
export declare const mapValues: (values: Values, path: string | string[]) => any;
export {};
