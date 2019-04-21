/// <reference types="react" />
import { Props } from '../types/interfaces';
import { ComponentType } from '../types/types';
interface Params {
    Display?: ComponentType;
    Loading?: ComponentType;
    Error?: ComponentType;
    useProps?: any;
    key?: any;
}
declare const _default: ({ Display, Loading, Error, useProps, key }: Params) => (ownProps: Props) => JSX.Element;
export default _default;
