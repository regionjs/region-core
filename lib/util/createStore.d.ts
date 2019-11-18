import { Payload, LoadPayload } from '../types';
declare type Listener = () => void;
export declare const createStore: () => {
    getState: () => {};
    load: (payload: LoadPayload) => {};
    set: (payload: Payload) => {};
    reset: () => void;
    subscribe: (listener: Listener) => () => void;
};
export {};
