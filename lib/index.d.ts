import CombinedRegion from './CombinedRegion';
import createRegion from './createRegion/createRegion';
import createLocalStorageRegion from './createRegion/createLocalStorageRegion';
declare class Region extends CombinedRegion {
    constructor(option: any);
}
declare const createCombinedRegion: (config?: string | import("./types").StrictConfig | undefined) => CombinedRegion;
export { createContext, useContext } from './Context';
export { createCombinedRegion, CombinedRegion, Region, createRegion, createLocalStorageRegion };
