/// <reference types="react" />
import { Props, Component } from '../types/types';
export declare const prehoc: (Display: any, Loading: any, Error: any) => (props: Props) => JSX.Element;
interface Params {
    Display?: Component;
    Loading?: Component;
    Error?: Component;
    useProps?: any;
    key?: any;
}
declare const _default: ({ Display, Loading, Error, useProps, key }: Params) => (ownProps: Props) => JSX.Element;
export default _default;
