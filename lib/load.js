"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.load = exports.set = void 0;

var _preCommit = _interopRequireDefault(require("./preCommit"));

var _region = require("./util/region");

var _constant = require("./util/constant");

var _logger = require("./util/logger");

var _isAsync = require("./util/isAsync");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    (0, _logger.groupWarn)("Catch an error when format ".concat(key, ", return null instead."), e);
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
/**
 * @param params Promise may need
 * @param format A function format result to other data structure
 * @param forceUpdate true | false
 */


exports.set = set;

var load =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(key, Promise) {
    var _ref3,
        forceUpdate,
        params,
        format,
        _getStore2,
        dispatch,
        snapshot,
        result,
        formattedResult,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref3 = _args.length > 2 && _args[2] !== undefined ? _args[2] : {}, forceUpdate = _ref3.forceUpdate, params = _ref3.params, format = _ref3.format;

            if ((0, _isAsync.isAsync)(Promise)) {
              _context.next = 4;
              break;
            }

            console.warn('set result directly');
            return _context.abrupt("return", set(key, Promise));

          case 4:
            _getStore2 = getStore(), dispatch = _getStore2.dispatch;
            snapshot = (0, _region.getResults)(key);
            _context.next = 8;
            return (0, _preCommit.default)({
              dispatch: dispatch,
              key: key,
              Promise: Promise,
              snapshot: snapshot,
              forceUpdate: forceUpdate,
              params: params
            });

          case 8:
            result = _context.sent;
            formattedResult = formatResult(result, snapshot, key, format);
            dispatch({
              type: _constant.setResult,
              payload: {
                key: key,
                result: formattedResult
              }
            });
            return _context.abrupt("return", formattedResult);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function load(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.load = load;