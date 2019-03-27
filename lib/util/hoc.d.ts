/// <reference types="react" />
import { Props, ComponentType } from '../types/types';
export declare const prehoc: (Display: any, Loading: any, Error: any) => (props: Props) => JSX.Element;
interface Params {
    Display?: ComponentType;
    Loading?: ComponentType;
    Error?: ComponentType;
    useProps?: any;
    key?: any;
}
declare const _default: ({ Display, Loading, Error, useProps, key }: Params) => (ownProps: Props) => JSX.Element;
export default _default;
