"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hoc = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var hoc = function hoc(DisplayComponent, LoadingComponent) {
  var WrapperComponent = function WrapperComponent(_ref) {
    var loading = _ref.loading,
        rest = _objectWithoutProperties(_ref, ["loading"]);

    return loading ? _react.default.createElement(LoadingComponent, rest) : _react.default.createElement(DisplayComponent, rest);
  };

  return WrapperComponent;
};

exports.hoc = hoc;