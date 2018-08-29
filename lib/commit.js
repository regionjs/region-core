'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (dispatch, getState, key, result, snapshot, props) {
  var willSetResult = props.willSetResult,
      didSetResult = props.didSetResult;

  if (typeof willSetResult === 'function') {
    console.warn('willSetResult is deprecated, you can use format instead, issue me if there is migrate problem');
    willSetResult({ dispatch: dispatch, getState: getState, result: result, snapshot: snapshot });
  }

  dispatch({ type: _config.setResult, payload: { key: key, result: result } });

  if (typeof didSetResult === 'function') {
    console.warn('didSetResult is deprecated, you can use const result = await load();');
    didSetResult({ dispatch: dispatch, getState: getState, result: result, snapshot: snapshot });
  }
};

var _config = require('./util/config');