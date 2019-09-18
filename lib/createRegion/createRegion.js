"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CombinedRegion_1 = require("../CombinedRegion");
var hoc_1 = require("./hoc");
var Region = /** @class */ (function () {
    function Region() {
        var _this = this;
        this.set = function (result, option) {
            if (option === void 0) { option = {}; }
            var region = _this.region;
            return region.set('value', result, option);
        };
        this.setBy = function (option) {
            if (option === void 0) { option = {}; }
            var region = _this.region;
            return region.setBy('value', option);
        };
        this.load = function (asyncFunction, option, exOption) {
            if (option === void 0) { option = {}; }
            var region = _this.region;
            return region.load('value', asyncFunction, option, exOption);
        };
        this.loadBy = function (asyncFunction, option, exOption) {
            if (option === void 0) { option = {}; }
            var region = _this.region;
            return region.loadBy('value', asyncFunction, option, exOption);
        };
        this.getProps = function () {
            var region = _this.region;
            return region.getProps('value');
        };
        this.getValue = function () {
            var region = _this.region;
            return region.getValue('value');
        };
        this.getLoading = function () {
            var region = _this.region;
            return region.getLoading('value');
        };
        this.getError = function () {
            var region = _this.region;
            return region.getError('value');
        };
        this.getFetchTime = function () {
            var region = _this.region;
            return region.getFetchTime('value');
        };
        this.useProps = function () {
            var region = _this.region;
            return region.useProps('value');
        };
        this.useValue = function () {
            var region = _this.region;
            return region.useValue('value');
        };
        this.useLoading = function () {
            var region = _this.region;
            return region.useLoading('value');
        };
        this.useError = function () {
            var region = _this.region;
            return region.useError('value');
        };
        this.useFetchTime = function () {
            var region = _this.region;
            return region.useFetchTime('value');
        };
        this.connect = function (Component, alias) {
            if (alias === void 0) { alias = 'value'; }
            var useProps = _this.useProps;
            return hoc_1.hoc({ Component: Component, alias: alias, useProps: useProps });
        };
        this.region = new CombinedRegion_1.default();
    }
    return Region;
}());
exports.Region = Region;
var createRegion = function (initialValue) {
    var region = new Region();
    if (initialValue !== undefined) {
        region.set(initialValue);
    }
    return region;
};
exports.default = createRegion;
