"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _reactRedux = require("react-redux");

var _shallowequal = _interopRequireDefault(require("shallowequal"));

var _store = require("../global/store");

var _hoc = _interopRequireWildcard(require("../util/hoc"));

var _isValidConnectKey = require("../util/isValidConnectKey");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Empty = function Empty() {
  return null;
};

var _default = function _default(Region) {
  var RegionReact =
  /*#__PURE__*/
  function (_Region) {
    _inherits(RegionReact, _Region);

    function RegionReact() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, RegionReact);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RegionReact)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "connectWith", function (key, Display, option) {
        var _assertThisInitialize = _assertThisInitialized(_this),
            connect = _assertThisInitialize.connect;

        return connect(key, option)(Display);
      });

      _defineProperty(_assertThisInitialized(_this), "connect", function (key) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            Loading = _ref.Loading,
            Error = _ref.Error;

        return function () {
          var Display = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Empty;

          var _assertThisInitialize2 = _assertThisInitialized(_this),
              useProps = _assertThisInitialize2.useProps,
              DefaultLoading = _assertThisInitialize2.DefaultLoading,
              DefaultError = _assertThisInitialize2.DefaultError;

          if (!(0, _isValidConnectKey.isValidConnectKey)(key)) {
            console.error('invalid key, provide valid key or use connect from \'react-redux\' directly');
            return null;
          }

          var WrapperComponent = (0, _hoc.default)({
            Display: Display,
            Loading: Loading || DefaultLoading || Display,
            Error: Error || DefaultError || Display,
            useProps: useProps,
            key: key
          });
          return WrapperComponent;
        };
      });

      _defineProperty(_assertThisInitialized(_this), "unstable_connect", function (key) {
        var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            Loading = _ref2.Loading,
            Error = _ref2.Error;

        return function () {
          var Display = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Empty;

          if ((0, _isValidConnectKey.isValidConnectKey)(key)) {
            var _assertThisInitialize3 = _assertThisInitialized(_this),
                private_selectorFactory = _assertThisInitialize3.private_selectorFactory,
                DefaultLoading = _assertThisInitialize3.DefaultLoading,
                DefaultError = _assertThisInitialize3.DefaultError;

            var WrapperComponent = (0, _hoc.prehoc)(Display, Loading || DefaultLoading || Display, Error || DefaultError || Display);
            return (0, _reactRedux.connect)(private_selectorFactory(key))(WrapperComponent);
          }

          console.error('invalid key, provide valid key or use connect from \'react-redux\' directly');
          return (0, _reactRedux.connect)(key)(Display);
        };
      });

      _defineProperty(_assertThisInitialized(_this), "useProps", function (key) {
        var _assertThisInitialize4 = _assertThisInitialized(_this),
            getProps = _assertThisInitialize4.getProps;

        var store = (0, _store.getStore)();

        var _useState = (0, _react.useState)(getProps(key)),
            _useState2 = _slicedToArray(_useState, 2),
            props = _useState2[0],
            setProps = _useState2[1];

        (0, _react.useEffect)(function () {
          var unsubscribe = store.subscribe(function () {
            var nextProps = getProps(key);

            if (!(0, _shallowequal.default)(props, nextProps)) {
              setProps(nextProps);
            }
          });
          return function () {
            return unsubscribe();
          };
        }, []);
        return props;
      });

      return _this;
    }

    return RegionReact;
  }(Region);

  return RegionReact;
};

exports.default = _default;