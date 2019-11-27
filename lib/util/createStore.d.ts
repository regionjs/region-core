import { State, Payload, LoadPayload } from '../types';
declare type Listener = () => void;
export declare const createStore: () => {
    getState: () => State;
    load: (payload: LoadPayload) => State;
    set: (payload: Payload, cache?: boolean | undefined) => State;
    reset: () => void;
    subscribe: (listener: Listener) => () => void;
};
export {};
