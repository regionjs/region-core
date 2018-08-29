'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = undefined;

var _reactRedux = require('react-redux');

var _getThingsFromState = require('./util/getThingsFromState');

var connect = exports.connect = function connect(mapStateToProps, mapDispatchToProps, mergeProps, options) {
  if (typeof mapStateToProps === 'string' || Array.isArray(mapStateToProps)) {
    return (0, _reactRedux.connect)((0, _getThingsFromState.mapResultToProps)(mapStateToProps), mapDispatchToProps, mergeProps, options);
  }
  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps, options);
};