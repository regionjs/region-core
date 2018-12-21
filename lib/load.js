"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.load = exports.set = void 0;

var _region = require("./util/region");

var _constant = require("./util/constant");

var _logger = require("./util/logger");

var _isAsync = require("./util/isAsync");

var _shouldThrottle = require("./util/shouldThrottle");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getStore = function getStore() {
  var store = _region.region.store;

  if (!store || typeof store.dispatch !== 'function' || typeof store.getState !== 'function') {
    throw Error('setConfig({ store }) must be called');
  }

  return store;
};

var formatResult = function formatResult(result, snapshot, key, format) {
  if (typeof format !== 'function') {
    return result;
  }

  try {
    var formattedResult = format(result, snapshot);
    return formattedResult;
  } catch (e) {
    (0, _logger.groupError)("Catch an error when format ".concat(key, ", return null instead."), e);
    return null;
  }
};
/**
 * @param format A function format result to other data structure
 */


var set = function set(key, result) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      format = _ref.format;

  var _getStore = getStore(),
      dispatch = _getStore.dispatch;

  var snapshot = (0, _region.getResults)(key);
  var formattedResult = formatResult(result, snapshot, key, format);
  dispatch({
    type: _constant.setResult,
    payload: {
      key: key,
      result: formattedResult
    }
  });
  return formattedResult;
};

exports.set = set;

var toPromise =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref2) {
    var Promise, params;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Promise = _ref2.Promise, params = _ref2.params;

            if (!(typeof Promise === 'function')) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", Promise(params));

          case 3:
            return _context.abrupt("return", Promise);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function toPromise(_x) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * @param params Promise may need
 * @param format A function format result to other data structure
 * @param forceUpdate true | false
 */


var load =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(key, Promise) {
    var _ref5,
        forceUpdate,
        params,
        format,
        _getStore2,
        dispatch,
        snapshot,
        result,
        formattedResult,
        _args2 = arguments;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref5 = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {}, forceUpdate = _ref5.forceUpdate, params = _ref5.params, format = _ref5.format;

            if ((0, _isAsync.isAsync)(Promise)) {
              _context2.next = 4;
              break;
            }

            console.warn('set result directly');
            return _context2.abrupt("return", set(key, Promise));

          case 4:
            _getStore2 = getStore(), dispatch = _getStore2.dispatch;
            snapshot = (0, _region.getResults)(key);

            if (!(0, _shouldThrottle.shouldThrottle)({
              Promise: Promise,
              forceUpdate: forceUpdate,
              key: key,
              snapshot: snapshot
            })) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", snapshot);

          case 8:
            dispatch({
              type: _constant.setLoading,
              payload: {
                key: key
              }
            });
            _context2.next = 11;
            return toPromise({
              Promise: Promise,
              params: params
            });

          case 11:
            result = _context2.sent;
            formattedResult = formatResult(result, snapshot, key, format);
            dispatch({
              type: _constant.setResult,
              payload: {
                key: key,
                result: formattedResult
              }
            });
            return _context2.abrupt("return", formattedResult);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function load(_x2, _x3) {
    return _ref4.apply(this, arguments);
  };
}();

exports.load = load;