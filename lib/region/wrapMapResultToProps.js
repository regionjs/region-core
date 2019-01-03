"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getPropsFromKeys = function getPropsFromKeys(keys, loading, results) {
  var props = {
    loading: loading
  };
  keys.forEach(function (key, index) {
    props[key] = results[index];
  });
  return props;
};

var getProps = function getProps(key, loading, results) {
  if (typeof key === 'string') {
    return _defineProperty({
      loading: loading
    }, key, results);
  }

  return getPropsFromKeys(key, loading, results);
};

var _default = function _default(RegionIn) {
  var Region =
  /*#__PURE__*/
  function (_RegionIn) {
    _inherits(Region, _RegionIn);

    function Region() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Region);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Region)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mapResultToProps", function (key) {
        var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
            getLoading = _assertThisInitialize.getLoading,
            getResults = _assertThisInitialize.getResults;

        return function (state, ownProps) {
          if (typeof key === 'string' || Array.isArray(key)) {
            return getProps(key, getLoading(key), getResults(key));
          }

          var props = getProps(key.result || key.entity, getLoading(key.loading || key.entity), getResults(key.result || key.entity));

          if (key.selector && typeof key.selector === 'function') {
            return key.selector(props, ownProps);
          }

          return props;
        };
      });

      return _this;
    }

    return Region;
  }(RegionIn);

  return Region;
};

exports.default = _default;