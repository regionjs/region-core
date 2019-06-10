"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Region_1 = require("../Region");
var Prop = /** @class */ (function () {
    function Prop(config) {
        var _this = this;
        this.set = function (result, option) {
            var region = _this.region;
            return region.set(region.name, result, option);
        };
        this.setBy = function (option) {
            if (option === void 0) { option = {}; }
            var region = _this.region;
            return region.setBy(region.name, option);
        };
        this.load = function (asyncFunction, option) {
            var region = _this.region;
            return region.load(region.name, asyncFunction, option);
        };
        this.loadBy = function (asyncFunction, option) {
            var region = _this.region;
            return region.loadBy(region.name, asyncFunction, option);
        };
        this.getProps = function () {
            var region = _this.region;
            return region.getProps(region.name);
        };
        this.useProps = function () {
            var region = _this.region;
            return region.useProps(region.name);
        };
        this.region = new Region_1.default(config);
    }
    return Prop;
}());
exports.default = Prop;
