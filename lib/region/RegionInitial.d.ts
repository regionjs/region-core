import { Action, Config, StrictConfig } from '../types/interfaces';
declare class RegionInitial {
    name: string;
    private_actionTypes: {
        LOAD: string;
        SET: string;
        RESET: string;
    };
    expiredTime?: number;
    enableLog?: boolean;
    strictLoading?: boolean;
    DefaultLoading?: any;
    DefaultError?: any;
    constructor(config: Config);
    private_setConfig: (config?: StrictConfig) => void;
    private_reducer: (state: {} | undefined, action: Action) => any;
}
export default RegionInitial;
