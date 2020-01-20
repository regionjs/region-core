import * as React from 'react';
interface Params {
    Display?: any;
    Loading?: any;
    Error?: any;
    useProps?: any;
    key?: any;
}
declare type Hoc = (params: Params) => React.FC<any>;
export declare const hoc: Hoc;
export {};
