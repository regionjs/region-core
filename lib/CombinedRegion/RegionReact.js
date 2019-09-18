"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var shallowEqual = require("shallowequal");
var RegionPublic_1 = require("./RegionPublic");
var util_1 = require("../util");
var Empty = function () { return null; };
var strictEqual = function (a, b) { return a === b; };
/**
 * @see https://github.com/facebook/react/issues/14994
 * @param getFn
 * @param equalityFn
 * @param store
 */
var createHooks = function (_a) {
    var getFn = _a.getFn, equalityFn = _a.equalityFn, store = _a.store;
    var useHook = function (key) {
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
    return useHook;
};
var RegionReact = /** @class */ (function (_super) {
    __extends(RegionReact, _super);
    function RegionReact() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.connectWith = function (key, Display, option) {
            var connect = _this.connect;
            return connect(key, option)(Display);
        };
        _this.connect = function (key, _a) {
            var _b = _a === void 0 ? {} : _a, Loading = _b.Loading, Error = _b.Error;
            return function (Display) {
                if (Display === void 0) { Display = Empty; }
                var _a = _this, useProps = _a.useProps, DefaultLoading = _a.DefaultLoading, DefaultError = _a.DefaultError;
                if (!util_1.isValidConnectKey(key)) {
                    console.error('invalid key, provide valid key or use connect from \'react-redux\' directly');
                    return null;
                }
                return util_1.hoc({
                    Display: Display,
                    Loading: Loading || DefaultLoading || Display,
                    Error: Error || DefaultError || Display,
                    useProps: useProps,
                    key: key,
                });
            };
        };
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
        _this.useProps = createHooks({ getFn: _this.getProps, equalityFn: shallowEqual, store: _this.private_store });
        _this.useValue = createHooks({ getFn: _this.getValue, equalityFn: strictEqual, store: _this.private_store });
        _this.useLoading = createHooks({ getFn: _this.getLoading, equalityFn: strictEqual, store: _this.private_store });
        _this.useError = createHooks({ getFn: _this.getError, equalityFn: strictEqual, store: _this.private_store });
        _this.useFetchTime = createHooks({ getFn: _this.getFetchTime, equalityFn: strictEqual, store: _this.private_store });
        return _this;
    }
    return RegionReact;
}(RegionPublic_1.default));
exports.default = RegionReact;
