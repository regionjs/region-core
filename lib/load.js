"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.load = load;

var _getThingsFromState = require("./util/getThingsFromState");

var _preCommit = _interopRequireDefault(require("./preCommit"));

var _config = require("./util/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

            if (!(!_config.store || typeof _config.store.dispatch !== 'function' || typeof _config.store.getState !== 'function')) {
              _context.next = 3;
              break;
            }

            throw Error('setConfig({ store }) must be called');

          case 3:
            dispatch = _config.store.dispatch, getState = _config.store.getState;
            snapshot = (0, _getThingsFromState.getResults)(key);
            _context.next = 7;
            return (0, _preCommit.default)(dispatch, getState, key, Promise, snapshot, props);

          case 7:
            result = _context.sent;
            dispatch({
              type: _config.setResult,
              payload: {
                key: key,
                result: result
              }
            });
            return _context.abrupt("return", result);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _load.apply(this, arguments);
}