'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setConfig = undefined;

var _getThingsFromState = require('./util/getThingsFromState');

var _reducer = require('./reducer');

var _load = require('./load');

var setConfig = exports.setConfig = function setConfig(_ref) {
  var reducerPath = _ref.reducerPath,
      expiredTime = _ref.expiredTime,
      enableLog = _ref.enableLog;

  (0, _getThingsFromState.setReducerPath)(reducerPath);
  (0, _load.setExpiredTime)(expiredTime);
  (0, _reducer.setEnableLog)(enableLog);
};