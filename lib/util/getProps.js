"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(keys, loading, results, error) {
  // TODO 是否要把 error: '' 给用户
  if (typeof keys === 'string') {
    var _props = _defineProperty({
      loading: loading
    }, keys, results);

    if (error !== '') {
      _props.error = error;
    }

    return _props;
  }

  var props = {
    loading: loading
  };

  if (error !== '') {
    props.error = error;
  }

  keys.forEach(function (key, index) {
    props[key] = results[index];
  });
  return props;
};

exports.default = _default;