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
var store_1 = require("../global/store");
var RegionInitial_1 = require("./RegionInitial");
var selectProps_1 = require("../util/selectProps");
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
            var mapLoadings = selectProps_1.mapValues(loadings, path);
            if (Array.isArray(mapLoadings)) {
                return mapLoadings.map(function (i) { return selectProps_1.formatLoading(i, strictLoading); }).reduce(function (a, b) { return a || b; }, false);
            }
            return selectProps_1.formatLoading(mapLoadings, strictLoading);
        };
        _this.private_getFetchTimes = function (path) {
            var private_getState = _this.private_getState;
            var _a = private_getState().fetchTimes, fetchTimes = _a === void 0 ? {} : _a;
            return selectProps_1.mapValues(fetchTimes, path);
        };
        _this.private_getResults = function (path) {
            var private_getState = _this.private_getState;
            var _a = private_getState().results, results = _a === void 0 ? {} : _a;
            return selectProps_1.mapValues(results, path);
        };
        _this.private_getError = function (path) {
            var private_getState = _this.private_getState;
            var _a = private_getState().errors, errors = _a === void 0 ? {} : _a;
            var mapErrors = selectProps_1.mapValues(errors, path);
            if (Array.isArray(mapErrors)) {
                var filteredErrors = mapErrors.filter(function (e) { return e; });
                if (filteredErrors.length > 0) {
                    return filteredErrors.map(function (e) { return e.message; }).join(', ');
                }
                return undefined;
            }
            return mapErrors && mapErrors.message;
        };
        return _this;
    }
    return RegionPrivate;
}(RegionInitial_1.default));
exports.default = RegionPrivate;
