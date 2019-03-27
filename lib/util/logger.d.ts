export declare const debug: (prefix: string, str: string) => void;
interface Param {
    actionType: string;
    key: string;
    result?: any;
    error?: any;
    nextState?: any;
}
export declare const group: ({ actionType, key, result, error, nextState }: Param) => void;
export {};
