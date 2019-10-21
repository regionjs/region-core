import { Key } from '../types';
interface CreateHooksParams {
    getFn: (key: any) => any;
    equalityFn: (a: any, b: any) => boolean;
    store: any;
}
/**
 * The store is bound to region and can not be changed.
 * So it is unnecessary to check whether store is memoized.
 * Some code is write for async mode. And they are not easy to test.
 * @see {
 *   @link https://gist.github.com/bvaughn/e25397f70e8c65b0ae0d7c90b731b189|
 *   Advanced example for manually managing subscriptions in an async-safe way using hooks
 * }
 */
export declare const createHooks: ({ getFn, equalityFn, store }: CreateHooksParams) => (key: Key) => any;
export {};
