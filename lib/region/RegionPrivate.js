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
var RegionInitial_1 = require("./RegionInitial");
var util_1 = require("../util");
var RegionPrivate = /** @class */ (function (_super) {
    __extends(RegionPrivate, _super);
    function RegionPrivate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.private_getState = function () {
            var private_store = _this.private_store;
            var getState = private_store.getState;
            var state = getState();
            return state || {};
        };
        _this.private_getLoadings = function (path) {
            var _a = _this, private_getState = _a.private_getState, strictLoading = _a.strictLoading;
            var loadings = private_getState().loadings;
            return util_1.mapValues(loadings, path, function (i) { return util_1.formatLoading(i, strictLoading); });
        };
        _this.private_getFetchTimes = function (path) {
            var private_getState = _this.private_getState;
            var fetchTimes = private_getState().fetchTimes;
            return util_1.mapValues(fetchTimes, path);
        };
        _this.private_getResults = function (path) {
            var private_getState = _this.private_getState;
            var results = private_getState().results;
            return util_1.mapValues(results, path);
        };
        _this.private_getErrors = function (path) {
            var private_getState = _this.private_getState;
            var errors = private_getState().errors;
            return util_1.mapValues(errors, path);
        };
        return _this;
    }
    return RegionPrivate;
}(RegionInitial_1.default));
exports.default = RegionPrivate;
