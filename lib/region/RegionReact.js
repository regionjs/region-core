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
         * There is only one store bound to all regions. App store is not related unless it is {@code provide()}
         * So it is unnecessary to check whether store is memoized
         * @see {
         *   @link https://gist.github.com/bvaughn/e25397f70e8c65b0ae0d7c90b731b189|
         *   Advanced example for manually managing subscriptions in an async-safe way using hooks
         * }
         * The link implies that this hook may broke in async mode.
         * Further information needed.
         * @param key string | string[]
         */
        _this.useProps = function (key) {
            var _a = _this, private_store = _a.private_store, getProps = _a.getProps;
            var _b = react_1.useState(getProps(key)), props = _b[0], setProps = _b[1];
            react_1.useEffect(function () {
                var unsubscribe = private_store.subscribe(function () {
                    var nextProps = getProps(key);
                    if (!shallowEqual(props, nextProps)) {
                        setProps(nextProps);
                    }
                });
                return unsubscribe;
            }, 
            /**
             * effect should be changed with props, otherwise shallowEqual will never hit
             */
            [props]);
            return props;
        };
        return _this;
    }
    return RegionReact;
}(RegionPublic_1.default));
exports.default = RegionReact;
