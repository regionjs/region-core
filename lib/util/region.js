"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapResultToProps = exports.getFetchTimes = exports.getResults = exports.getLoading = exports.setConfig = exports.region = void 0;

var _region = _interopRequireDefault(require("../region"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var region = new _region.default();
exports.region = region;
var setConfig = region.setConfig,
    getLoading = region.getLoading,
    getResults = region.getResults,
    getFetchTimes = region.getFetchTimes,
    mapResultToProps = region.mapResultToProps;
exports.mapResultToProps = mapResultToProps;
exports.getFetchTimes = getFetchTimes;
exports.getResults = getResults;
exports.getLoading = getLoading;
exports.setConfig = setConfig;