"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createMappedRegion_1 = __importDefault(require("./createMappedRegion"));
exports.createMappedRegion = createMappedRegion_1.default;
var createCombinedRegion_1 = __importDefault(require("./createCombinedRegion"));
exports.createCombinedRegion = createCombinedRegion_1.default;
var createRegion_1 = __importDefault(require("./createRegion/createRegion"));
exports.createRegion = createRegion_1.default;
var createLocalStorageRegion_1 = __importDefault(require("./createRegion/createLocalStorageRegion"));
exports.createLocalStorageRegion = createLocalStorageRegion_1.default;
