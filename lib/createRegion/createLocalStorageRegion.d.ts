declare const createLocalStorageRegion: <V>(key: string, fallbackValue: V) => import("./createRegion").CreateRegionReturnValue<V>;
export default createLocalStorageRegion;
