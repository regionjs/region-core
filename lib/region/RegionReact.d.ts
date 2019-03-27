/// <reference types="react" />
import { Props } from '../types/types';
import { ConnectOptions } from '../types/interfaces';
import RegionPublic from './RegionPublic';
declare class RegionReact extends RegionPublic {
    connectWith: (key: any, Display: any, option?: ConnectOptions | undefined) => ((ownProps: Props) => JSX.Element) | null;
    connect: (key: any, { Loading, Error }?: ConnectOptions) => (Display?: any) => ((ownProps: Props) => JSX.Element) | null;
    unstable_connect: (key: any, { Loading, Error }?: ConnectOptions) => (Display?: () => null) => import("react-redux").ConnectedComponentClass<(props: Props) => JSX.Element, any> | import("react-redux").ConnectedComponentClass<() => null, Pick<{}, never>>;
    /**
     * There is only one store bound to all regions. App store is not related unless it is {@code provide()}
     * So it is unnecessary to check whether store is memoized
     * @see {
     *   @link https://gist.github.com/bvaughn/e25397f70e8c65b0ae0d7c90b731b189|
     *   Advanced example for manually managing subscriptions in an async-safe way using hooks
     * }
     * The link implies that this hook may broke in async mode.
     * Further information needed.
     */
    useProps: (key: any) => Props;
}
export default RegionReact;
