import { State, Payload, LoadPayload, PropsKey } from '../types';
declare type Listener = () => void;
export declare const createStore: () => {
    getAttribute: (key: string, attribute: PropsKey) => any;
    private_setState: (value: State) => void;
    load: (payload: LoadPayload) => State;
    set: (payload: Payload) => State;
    setCache: (payload: Payload) => State;
    reset: () => void;
    subscribe: (listener: Listener) => () => void;
};
export {};
