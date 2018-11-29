"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = set;
exports.load = load;

var _getThingsFromState = require("./util/getThingsFromState");

var _preCommit = _interopRequireDefault(require("./preCommit"));

var _config = require("./util/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var getStore = function getStore() {
  if (!_config.store || typeof _config.store.dispatch !== 'function' || typeof _config.store.getState !== 'function') {
    throw Error('setConfig({ store }) must be called');
  }

  return _config.store;
};

var isAsync = function isAsync(Promise) {
  if (Promise && _typeof(Promise) === 'object' && typeof Promise.then === 'function') {
    return true;
  }

  return typeof Promise === 'function';
};

function set(key, result) {
  var _getStore = getStore(),
      dispatch = _getStore.dispatch;

  dispatch({
    type: _config.setResult,
    payload: {
      key: key,
      result: result
    }
  });
  return result;
}
/**
 * @param props.params Promise may need
 * @param props.format A pure function format result to other data structure
 * @param props.forceUpdate true | false
 */


function load(_x, _x2) {
  return _load.apply(this, arguments);
}

function _load() {
  _load = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(key, Promise) {
    var props,
        _getStore2,
        dispatch,
        getState,
        snapshot,
        result,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            props = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};

            if (isAsync(Promise)) {
              _context.next = 4;
              break;
            }

            console.warn('set result directly');
            return _context.abrupt("return", set(key, Promise));

          case 4:
            _getStore2 = getStore(), dispatch = _getStore2.dispatch, getState = _getStore2.getState;
            snapshot = (0, _getThingsFromState.getResults)(key);
            _context.next = 8;
            return (0, _preCommit.default)(_objectSpread({
              dispatch: dispatch,
              getState: getState,
              key: key,
              Promise: Promise,
              snapshot: snapshot
            }, props));

          case 8:
            result = _context.sent;
            dispatch({
              type: _config.setResult,
              payload: {
                key: key,
                result: result
              }
            });
            return _context.abrupt("return", result);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _load.apply(this, arguments);
}