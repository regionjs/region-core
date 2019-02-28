"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _selectProps = _interopRequireDefault(require("../util/selectProps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var select = function select(_ref) {
  var selector = _ref.selector,
      props = _ref.props;

  if (selector && typeof selector === 'function') {
    return selector(props, props);
  }

  return {};
};

var _default = function _default(Region) {
  var RegionPrivate =
  /*#__PURE__*/
  function (_Region) {
    _inherits(RegionPrivate, _Region);

    function RegionPrivate() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, RegionPrivate);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RegionPrivate)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "private_selectorFactory", function (key) {
        var _assertThisInitialize = _assertThisInitialized(_this),
            getLoading = _assertThisInitialize.getLoading,
            getResults = _assertThisInitialize.getResults,
            getError = _assertThisInitialize.getError;

        return function (state, ownProps) {
          if (typeof key === 'string' || Array.isArray(key)) {
            return (0, _selectProps.default)(key, getLoading(key), getResults(key), getError(key));
          }

          var props = (0, _selectProps.default)(key.result || key.key, getLoading(key.loading || key.key), getResults(key.result || key.key), getError(key.error || key.key));
          var selectedProps = select({
            selector: key.selector,
            props: _objectSpread({}, props, ownProps)
          });
          return _objectSpread({}, props, selectedProps);
        };
      });

      return _this;
    }

    return RegionPrivate;
  }(Region);

  return RegionPrivate;
};

exports.default = _default;