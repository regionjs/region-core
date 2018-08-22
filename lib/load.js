'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.load = undefined;

/**
 * @param props.params Promise may need
 * @param props.format A pure function format result to other data structure
 * @param props.forceUpdate 'always' | 'need' | 'never'
 */
var load = exports.load = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(key, Promise) {
    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var dispatch, getState, snapshot, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!_config.store || typeof _config.store.dispatch !== 'function' || typeof _config.store.getState !== 'function')) {
              _context.next = 2;
              break;
            }

            throw Error('setConfig({ store }) must be called');

          case 2:
            dispatch = _config.store.dispatch, getState = _config.store.getState;
            snapshot = (0, _getThingsFromState.getResults)(getState(), key);
            _context.next = 6;
            return (0, _preCommit2.default)(dispatch, getState, key, Promise, snapshot, props);

          case 6:
            result = _context.sent;

            (0, _commit2.default)(dispatch, getState, key, result, snapshot, props);
            return _context.abrupt('return', result);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function load(_x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _getThingsFromState = require('./util/getThingsFromState');

var _preCommit = require('./preCommit');

var _preCommit2 = _interopRequireDefault(_preCommit);

var _commit = require('./commit');

var _commit2 = _interopRequireDefault(_commit);

var _config = require('./util/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }