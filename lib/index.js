"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Provider", {
  enumerable: true,
  get: function get() {
    return _Provider.Provider;
  }
});
Object.defineProperty(exports, "getProvider", {
  enumerable: true,
  get: function get() {
    return _Provider.getProvider;
  }
});
Object.defineProperty(exports, "Region", {
  enumerable: true,
  get: function get() {
    return _region2.default;
  }
});
exports.reducer = exports.connectWith = exports.load = exports.set = exports.mapResultToProps = exports.getFetchTimes = exports.getResults = exports.getLoading = exports.setConfig = void 0;

require("@babel/polyfill");

var _Provider = require("./global/Provider");

var _region = require("./global/region");

var _region2 = _interopRequireDefault(require("./region"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setConfig = _region.region.setConfig,
    getLoading = _region.region.getLoading,
    getResults = _region.region.getResults,
    getFetchTimes = _region.region.getFetchTimes,
    mapResultToProps = _region.region.mapResultToProps,
    set = _region.region.set,
    load = _region.region.load,
    connectWith = _region.region.connectWith,
    reducer = _region.region.reducer;
exports.reducer = reducer;
exports.connectWith = connectWith;
exports.load = load;
exports.set = set;
exports.mapResultToProps = mapResultToProps;
exports.getFetchTimes = getFetchTimes;
exports.getResults = getResults;
exports.getLoading = getLoading;
exports.setConfig = setConfig;