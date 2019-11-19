"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * The store is bound to region and can not be changed.
 * So it is unnecessary to check whether store is memoized.
 * Some code is write for async mode. And they are not easy to test.
 * @see {
 *   @link https://gist.github.com/bvaughn/e25397f70e8c65b0ae0d7c90b731b189|
 *   Advanced example for manually managing subscriptions in an async-safe way using hooks
 * }
 */
exports.createHooks = function (_a) {
    var getFn = _a.getFn, equalityFn = _a.equalityFn, store = _a.store;
    return function (key) {
        var _a = react_1.useState({}), forceUpdate = _a[1];
        var ref = react_1.useRef();
        ref.current = getFn(key);
        react_1.useEffect(function () {
            var didUnsubscribe = false;
            var checkForUpdates = function () {
                if (didUnsubscribe) {
                    return;
                }
                var nextValue = getFn(key);
                /** @see https://github.com/facebook/react/issues/14994 */
                if (!equalityFn(ref.current, nextValue)) {
                    ref.current = nextValue;
                    forceUpdate({});
                }
            };
            var unsubscribe = store.subscribe(checkForUpdates);
            checkForUpdates();
            return function () {
                didUnsubscribe = true;
                unsubscribe();
            };
        }, []);
        return ref.current;
    };
};
