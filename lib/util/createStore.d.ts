import { Payload } from '../types';
declare type Listener = () => void;
export declare const createStore: () => {
    getState: () => {};
    load: (payload: Payload) => {};
    set: (payload: Payload) => {};
    reset: () => void;
    subscribe: (listener: Listener) => () => void;
};
export {};
