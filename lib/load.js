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
var asyncLoad = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, key, Promise) {
    var props = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    var snapshot, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof dispatch !== 'function' || typeof getState !== 'function')) {
              _context.next = 2;
              break;
            }

            throw Error('dispatch and getState is required when you use asyncLoad()');

          case 2:
            snapshot = (0, _getThingsFromState.getResults)(getState(), key);
            _context.next = 5;
            return (0, _preCommit2.default)(dispatch, getState, key, Promise, snapshot, props);

          case 5:
            result = _context.sent;

            (0, _commit2.default)(dispatch, getState, key, result, snapshot, props);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function asyncLoad(_x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

var _getThingsFromState = require('./util/getThingsFromState');

var _preCommit = require('./preCommit');

var _preCommit2 = _interopRequireDefault(_preCommit);

var _commit = require('./commit');

var _commit2 = _interopRequireDefault(_commit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var load = exports.load = function load(key, Promise, props) {
  return function (dispatch, getState) {
    asyncLoad(dispatch, getState, key, Promise, props);
  };
};