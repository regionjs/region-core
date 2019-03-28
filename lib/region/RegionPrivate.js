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
            return state[name] || {};
        };
        _this.private_getLoadings = function (path) {
            var _a = _this, private_getState = _a.private_getState, strictLoading = _a.strictLoading;
            var loadings = private_getState().loadings;
            return selectProps_1.mapValues(loadings, path, function (i) { return selectProps_1.formatLoading(i, strictLoading); });
        };
        _this.private_getFetchTimes = function (path) {
            var private_getState = _this.private_getState;
            var fetchTimes = private_getState().fetchTimes;
            return selectProps_1.mapValues(fetchTimes, path);
        };
        _this.private_getResults = function (path) {
            var private_getState = _this.private_getState;
            var results = private_getState().results;
            return selectProps_1.mapValues(results, path);
        };
        _this.private_getErrors = function (path) {
            var private_getState = _this.private_getState;
            var errors = private_getState().errors;
            return selectProps_1.mapValues(errors, path);
        };
        return _this;
    }
    return RegionPrivate;
}(RegionInitial_1.default));
exports.default = RegionPrivate;
