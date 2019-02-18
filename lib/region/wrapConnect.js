"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _hoc = _interopRequireDefault(require("../util/hoc"));

var _isValidConnectKey = require("../util/isValidConnectKey");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Empty = function Empty() {
  return null;
};

var _default = function _default(Region) {
  var RegionConnect =
  /*#__PURE__*/
  function (_Region) {
    _inherits(RegionConnect, _Region);

    function RegionConnect() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, RegionConnect);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RegionConnect)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "connectWith", function (key, Display, option) {
        var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
            connect = _assertThisInitialize.connect;

        return connect(key, option)(Display);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "connect", function (key) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            Loading = _ref.Loading,
            Error = _ref.Error;

        return function () {
          var Display = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Empty;

          if ((0, _isValidConnectKey.isValidConnectKey)(key)) {
            var _assertThisInitialize2 = _assertThisInitialized(_assertThisInitialized(_this)),
                private_selectorFactory = _assertThisInitialize2.private_selectorFactory,
                DefaultLoading = _assertThisInitialize2.DefaultLoading,
                DefaultError = _assertThisInitialize2.DefaultError;

            var WrapperComponent = (0, _hoc.default)(Display, Loading || DefaultLoading || Display, Error || DefaultError || Display);
            return (0, _reactRedux.connect)(private_selectorFactory(key))(WrapperComponent);
          }

          console.error('invalid key, provide valid key or use connect from \'react-redux\' directly');
          return (0, _reactRedux.connect)(key)(Display);
        };
      });

      return _this;
    }

    return RegionConnect;
  }(Region);

  return RegionConnect;
};

exports.default = _default;