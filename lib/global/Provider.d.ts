/// <reference types="react" />
import { ProvideOptions } from '../types/interfaces';
interface Props {
    children: JSX.Element;
}
export declare const getProvider: (options?: ProvideOptions) => ({ children }: Props) => JSX.Element;
export {};
