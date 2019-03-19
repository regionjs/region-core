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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var selectProps_1 = require("../util/selectProps");
var deprecate_1 = require("../util/deprecate");
var store_1 = require("../global/store");
var formatLoading = function (loading, strictLoading) {
    if (loading) {
        return true;
    }
    if (loading === undefined) {
        if (strictLoading) { // treat undefined as true or as undefined
            return true;
        }
        return undefined;
    }
    return false;
};
var mapValues = function (values, path) {
    if (Array.isArray(path)) {
        return path.map(function (i) { return values[i]; });
    }
    return values[path];
};
/**
 * @deprecated
 */
// @ts-ignore
var select = function (_a) {
    var selector = _a.selector, props = _a.props, ownProps = _a.ownProps;
    if (selector && typeof selector === 'function') {
        if (!ownProps) {
            deprecate_1.default('selector is deprecated. This may cause the error. Use unstable_connect instead, or use useProps and hooks into it.');
        }
        else {
            deprecate_1.default('selector is deprecated. Use unstable_connect instead, or use useProps and hooks into it.');
        }
        return selector(__assign({}, props, ownProps), __assign({}, props, ownProps));
    }
    return {};
};
exports.default = (function (Region) {
    var RegionPrivate = /** @class */ (function (_super) {
        __extends(RegionPrivate, _super);
        function RegionPrivate() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.private_getState = function () {
                var name = _this.name;
                var getState = store_1.getStore().getState;
                var state = getState();
                if (name === null) {
                    return state || {};
                }
                return state[name] || {};
            };
            _this.private_getLoading = function (path) {
                var _a = _this, private_getState = _a.private_getState, strictLoading = _a.strictLoading;
                var loadings = private_getState().loadings;
                if (!loadings) {
                    return true;
                }
                var mapLoadings = mapValues(loadings, path);
                if (Array.isArray(mapLoadings)) {
                    return mapLoadings.map(function (i) { return formatLoading(i, strictLoading); }).reduce(function (a, b) { return a || b; }, false);
                }
                return formatLoading(mapLoadings, strictLoading);
            };
            _this.private_getFetchTimes = function (path) {
                var private_getState = _this.private_getState;
                var _a = private_getState().fetchTimes, fetchTimes = _a === void 0 ? {} : _a;
                return mapValues(fetchTimes, path);
            };
            _this.private_getResults = function (path) {
                var private_getState = _this.private_getState;
                var _a = private_getState().results, results = _a === void 0 ? {} : _a;
                return mapValues(results, path);
            };
            _this.private_getError = function (path) {
                var private_getState = _this.private_getState;
                var _a = private_getState().errors, errors = _a === void 0 ? {} : _a;
                var mapErrors = mapValues(errors, path);
                if (Array.isArray(mapErrors)) {
                    var filteredErrors = mapErrors.filter(function (e) { return e; });
                    if (filteredErrors.length > 0) {
                        return filteredErrors.map(function (e) { return e.message; }).join(', ');
                    }
                    return undefined;
                }
                return mapErrors && mapErrors.message;
            };
            _this.getProps = function (key) {
                var _a = _this, getLoading = _a.private_getLoading, getResults = _a.private_getResults, getError = _a.private_getError;
                if (typeof key === 'string' || Array.isArray(key)) {
                    return selectProps_1.default(key, getLoading(key), getResults(key), getError(key));
                }
                return selectProps_1.default(key.result || key.key, getLoading(key.loading || key.key), getResults(key.result || key.key), getError(key.error || key.key));
            };
            _this.private_selectorFactory = function (key) {
                var getProps = _this.getProps;
                return function (state, ownProps) {
                    var props = getProps(key);
                    var selectedProps = select({ selector: key.selector, props: props, ownProps: ownProps });
                    return __assign({}, props, selectedProps);
                };
            };
            return _this;
        }
        return RegionPrivate;
    }(Region));
    return RegionPrivate;
});
