import { LegacyKey } from '../types';
export declare const selectLoading: (loadings: (number | undefined)[]) => boolean;
export declare const selectError: (errors: Error[]) => Error | undefined;
export declare const selectFetchTime: (fetchTimes: (number | undefined)[]) => number | undefined;
export declare const selectResult: (keys: (string | number | symbol)[], results: any[]) => any;
interface FormatLegacyKeysResult<K> {
    keys: K[];
    loadings: K[];
    results: K[];
    fetchTimes: K[];
    errors: K[];
}
export declare const formatLegacyKeys: <K_1>(key: LegacyKey<K_1>) => FormatLegacyKeysResult<K_1>;
export {};
