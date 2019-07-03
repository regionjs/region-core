/// <reference types="react" />
import RegionPublic from './RegionPublic';
import { Props, Key, ConnectOption } from '../types';
declare class RegionReact extends RegionPublic {
    connectWith: (key: Key, Display: any, option?: ConnectOption | undefined) => ((ownProps: Props) => JSX.Element) | null;
    connect: (key: Key, { Loading, Error }?: ConnectOption) => (Display?: any) => ((ownProps: Props) => JSX.Element) | null;
    /**
     * The store is bound to region and can not be changed.
     * So it is unnecessary to check whether store is memoized.
     * Some code is write for async mode. And they are not easy to test.
     * @see {
     *   @link https://gist.github.com/bvaughn/e25397f70e8c65b0ae0d7c90b731b189|
     *   Advanced example for manually managing subscriptions in an async-safe way using hooks
     * }
     * @param key string | string[]
     */
    useProps: (key: Key) => Props;
    useValue: (key: string) => any;
}
export default RegionReact;
