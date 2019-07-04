import { Store } from 'redux';
import { State, Action, Config, StrictConfig } from '../types';
declare class RegionInitial {
    name: string;
    private_store: Store;
    private_actionTypes: {
        LOAD: string;
        SET: string;
        RESET: string;
    };
    expiredTime: number;
    enableLog: boolean;
    strictLoading: boolean;
    DefaultLoading?: any;
    DefaultError?: any;
    constructor(config?: Config);
    private_setConfig: (config?: StrictConfig) => void;
    private_reducer: (state: State | undefined, action: Action) => State;
}
export default RegionInitial;
