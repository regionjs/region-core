"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createCombinedRegion_1 = require("./createCombinedRegion");
exports.createCombinedRegion = createCombinedRegion_1.default;
var createRegion_1 = require("./createRegion/createRegion");
exports.createRegion = createRegion_1.default;
var createLocalStorageRegion_1 = require("./createRegion/createLocalStorageRegion");
exports.createLocalStorageRegion = createLocalStorageRegion_1.default;
var util_1 = require("./util");
var unstable_enableExperimental = function () {
    util_1.setSwitchIdFlag(true);
    util_1.setAcceptLatestFlag(true);
};
exports.unstable_enableExperimental = unstable_enableExperimental;
