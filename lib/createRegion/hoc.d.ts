/// <reference types="react" />
interface HocParams {
    Component: any;
    alias: string;
    useProps: any;
}
export declare const hoc: ({ Component, alias, useProps }: HocParams) => (ownProps: any) => JSX.Element;
export {};
