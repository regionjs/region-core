/// <reference types="react" />
import { Props } from '../types';
interface HocParams {
    Component: any;
    alias: string;
    useProps: any;
}
export declare const hoc: ({ Component, alias, useProps }: HocParams) => (ownProps: Props) => JSX.Element;
export {};
