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
var CombinedRegion_1 = require("./CombinedRegion");
exports.CombinedRegion = CombinedRegion_1.default;
var createRegion_1 = require("./createRegion/createRegion");
exports.createRegion = createRegion_1.default;
var createLocalStorageRegion_1 = require("./createRegion/createLocalStorageRegion");
exports.createLocalStorageRegion = createLocalStorageRegion_1.default;
var util_1 = require("./util");
var Region = /** @class */ (function (_super) {
    __extends(Region, _super);
    function Region(option) {
        var _this = _super.call(this, option) || this;
        util_1.deprecate('Region is renamed as createCombinedRegion');
        return _this;
    }
    return Region;
}(CombinedRegion_1.default));
exports.Region = Region;
var createCombinedRegion = function (config) {
    return new CombinedRegion_1.default(config);
};
exports.createCombinedRegion = createCombinedRegion;
var Context_1 = require("./Context");
exports.createContext = Context_1.createContext;
exports.useContext = Context_1.useContext;
