import CombinedRegion from './CombinedRegion';
import createRegion from './createRegion/createRegion';
import createLocalStorageRegion from './createRegion/createLocalStorageRegion';
declare class Region extends CombinedRegion {
    constructor(option: any);
}
export { createContext, useContext } from './Context';
export { CombinedRegion, Region, createRegion, createLocalStorageRegion };
