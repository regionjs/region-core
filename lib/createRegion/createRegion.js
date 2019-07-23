"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CombinedRegion_1 = require("../CombinedRegion");
var Region = /** @class */ (function () {
    function Region() {
        var _this = this;
        this.set = function (result, option) {
            if (option === void 0) { option = {}; }
            var region = _this.region;
            return region.set('data', result, option);
        };
        this.setBy = function (option) {
            if (option === void 0) { option = {}; }
            var region = _this.region;
            return region.setBy('data', option);
        };
        this.load = function (asyncFunction, option) {
            if (option === void 0) { option = {}; }
            var region = _this.region;
            return region.load('data', asyncFunction, option);
        };
        this.loadBy = function (asyncFunction, option) {
            if (option === void 0) { option = {}; }
            var region = _this.region;
            return region.loadBy('data', asyncFunction, option);
        };
        this.getProps = function () {
            var region = _this.region;
            return region.getProps('data');
        };
        this.getValue = function () {
            var region = _this.region;
            return region.getValue('data');
        };
        this.useProps = function () {
            var region = _this.region;
            return region.useProps('data');
        };
        this.useValue = function () {
            var region = _this.region;
            return region.useValue('data');
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
