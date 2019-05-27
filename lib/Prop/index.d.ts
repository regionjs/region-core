import Region from '../Region';
import { LoadOption } from '../types';
declare class Prop extends Region {
    set: (result: any, option?: LoadOption) => any;
    setBy: (option?: LoadOption) => (result: any) => any;
    load: (asyncFunction: any, option?: LoadOption) => Promise<any>;
    loadBy: (asyncFunction: any, option?: LoadOption) => Promise<(params: any) => Promise<any>>;
    getProps: () => {
        loading: boolean | undefined;
        fetchTime: number | undefined;
        error: string | undefined;
    } & import("../types").Props;
    useProps: () => import("../types").Props;
    connect: undefined;
    connectWith: undefined;
}
export default Prop;
