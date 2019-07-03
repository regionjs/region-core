"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CombinedRegion_1 = require("../CombinedRegion");
var Region = /** @class */ (function () {
    function Region(config) {
        if (config === void 0) { config = 'data'; }
        var _this = this;
        this.set = function (result, option) {
            if (option === void 0) { option = {}; }
            var region = _this.region;
            return region.set(region.name, result, option);
        };
        this.setBy = function (option) {
            if (option === void 0) { option = {}; }
            var region = _this.region;
            return region.setBy(region.name, option);
        };
        this.load = function (asyncFunction, option) {
            if (option === void 0) { option = {}; }
            var region = _this.region;
            return region.load(region.name, asyncFunction, option);
        };
        this.loadBy = function (asyncFunction, option) {
            if (option === void 0) { option = {}; }
            var region = _this.region;
            return region.loadBy(region.name, asyncFunction, option);
        };
        this.getProps = function () {
            var region = _this.region;
            return region.getProps(region.name);
        };
        this.getValue = function () {
            var region = _this.region;
            return region.getProps(region.name);
        };
        this.useProps = function () {
            var region = _this.region;
            return region.useProps(region.name);
        };
        this.useValue = function () {
            var region = _this.region;
            return region.useValue(region.name);
        };
        this.region = new CombinedRegion_1.default(config);
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
