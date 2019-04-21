import { Store } from 'redux';
declare type Reducer = any;
interface EnhancedStore extends Store {
    reducers: {
        [key: string]: Reducer;
    };
}
export declare const setStore: (nextStore: EnhancedStore) => void;
export declare const getStore: () => EnhancedStore;
export declare const injectStore: (name: string, private_reducer: any) => void;
export {};
