declare type State = {
    [key: string]: any;
};
export declare function assignValueDeep(state: State | undefined, path: any, format: any): State & {
    [x: number]: State & {
        [x: string]: any;
    };
};
export declare function setValueDeep(state: State, path: any, value: any): null;
export {};
