'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (dispatch, getState, key, result, snapshot, props) {
  var willSetResult = props.willSetResult,
      didSetResult = props.didSetResult;

  if (typeof willSetResult === 'function') {
    willSetResult({ dispatch: dispatch, getState: getState, result: result, snapshot: snapshot });
  }

  dispatch({ type: _config.setResult, payload: { key: key, result: result } });

  if (typeof didSetResult === 'function') {
    didSetResult({ dispatch: dispatch, getState: getState, result: result, snapshot: snapshot });
  }
};

var _config = require('./util/config');