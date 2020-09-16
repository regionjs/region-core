import { State, Props, Payload, LoadPayload } from '../types';
declare type Listener = () => void;
export declare const createStore: <T>() => {
    getAttribute: <K extends keyof T, A extends "error" | "loading" | "result" | "promise" | "fetchTime">(key: K, attribute: A) => Props<T[K]>[A];
    private_setState: (value: State<T>) => void;
    load: <K_1 extends keyof T, TResult>(payload: LoadPayload<K_1, TResult>) => State<T>;
    loadEnd: <K_2 extends keyof T, TResult_1>(payload: {
        key: K_2;
    }) => State<T>;
    set: <K_3 extends keyof T>(payload: Payload<T, K_3>) => State<T>;
    reset: () => void;
    subscribe: (listener: Listener) => () => void;
};
export {};
