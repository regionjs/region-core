declare type State = {
    [key: string]: any;
};
export declare const assignValueDeep: (state: State | undefined, path: any, format: any) => State & {
    [x: number]: State & {
        [x: string]: any;
    };
};
export declare const setValueDeep: (state: State, path: any, value: any) => null;
export {};
