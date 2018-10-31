'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectWith = undefined;

var _reactRedux = require('react-redux');

var _getThingsFromState = require('./util/getThingsFromState');

var connectWith = exports.connectWith = function connectWith(key, Component, LoadingComponent) {
  // eslint-disable-line
  if (typeof key === 'string' || Array.isArray(key)) {
    return (0, _reactRedux.connect)((0, _getThingsFromState.mapResultToProps)(key))(Component);
  }
  console.warn('key should be string or array of string');
  return (0, _reactRedux.connect)(key)(Component);
};

// export const silentConnect =