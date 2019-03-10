"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(keys, loading, results, error) {
  // TODO migrate selectProps
  // 可以在这里做更多的事情，把合并的过程放在这里，因为 getFunctions 已经是 private 的了，这样就不用考虑【是否要把 error: '' 给用户】
  // 同时可以把 fetchTime 放在这里
  // 但是为了用户友好，在下个大版本做这个
  if (typeof keys === 'string') {
    var _props = _defineProperty({
      loading: loading,
      error: error
    }, keys, results);

    return _props;
  }

  var props = {
    loading: loading,
    error: error
  };
  keys.forEach(function (key, index) {
    props[key] = results[index];
  });
  return props;
};

exports.default = _default;