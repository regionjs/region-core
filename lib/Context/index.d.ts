import { Context as ReactContext } from 'react';
import { Region } from '../createRegion/createRegion';
export declare const createContext: (defaultValue: any) => any;
interface ContextType extends ReactContext<any> {
    symbol: Symbol;
    region: Region;
}
export declare const useContext: (Context: ContextType) => any;
export {};
