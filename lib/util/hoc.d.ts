/// <reference types="react" />
import { ComponentType } from '../types';
interface Params {
    Display?: ComponentType;
    Loading?: ComponentType;
    Error?: ComponentType;
    useProps?: any;
    key?: any;
}
export declare const hoc: ({ Display, Loading, Error, useProps, key }: Params) => (ownProps: any) => JSX.Element;
export {};
