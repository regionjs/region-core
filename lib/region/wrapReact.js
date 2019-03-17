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
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var shallowEqual = require("shallowequal");
var store_1 = require("../global/store");
var hoc_1 = require("../util/hoc");
var isValidConnectKey_1 = require("../util/isValidConnectKey");
var Empty = function () { return null; };
exports["default"] = (function (Region) {
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
                    if (!isValidConnectKey_1.isValidConnectKey(key)) {
                        console.error('invalid key, provide valid key or use connect from \'react-redux\' directly');
                        return null;
                    }
                    var WrapperComponent = hoc_1["default"]({
                        Display: Display,
                        Loading: Loading || DefaultLoading || Display,
                        Error: Error || DefaultError || Display,
                        useProps: useProps,
                        key: key
                    });
                    return WrapperComponent;
                };
            };
            _this.unstable_connect = function (key, _a) {
                var _b = _a === void 0 ? {} : _a, Loading = _b.Loading, Error = _b.Error;
                return function (Display) {
                    if (Display === void 0) { Display = Empty; }
                    if (isValidConnectKey_1.isValidConnectKey(key)) {
                        var _a = _this, private_selectorFactory = _a.private_selectorFactory, DefaultLoading = _a.DefaultLoading, DefaultError = _a.DefaultError;
                        var WrapperComponent = hoc_1.prehoc(Display, Loading || DefaultLoading || Display, Error || DefaultError || Display);
                        return react_redux_1.connect(private_selectorFactory(key))(WrapperComponent);
                    }
                    console.error('invalid key, provide valid key or use connect from \'react-redux\' directly');
                    return react_redux_1.connect(key)(Display);
                };
            };
            _this.useProps = function (key) {
                var getProps = _this.getProps;
                var store = store_1.getStore();
                var _a = react_1.useState(getProps(key)), props = _a[0], setProps = _a[1];
                react_1.useEffect(function () {
                    var unsubscribe = store.subscribe(function () {
                        var nextProps = getProps(key);
                        if (!shallowEqual(props, nextProps)) {
                            setProps(nextProps);
                        }
                    });
                    return function () { return unsubscribe(); };
                }, []);
                return props;
            };
            return _this;
        }
        return RegionReact;
    }(Region));
    return RegionReact;
});
