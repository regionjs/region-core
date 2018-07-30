'use strict';

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('config', function () {
  test('default', function () {
    expect(_config2.default).toEqual({ enableLog: true, expiredTime: 300000, reducerPath: null });
  });
  test('set nothing', function () {
    (0, _config.setConfig)();
    expect(_config2.default).toEqual({ enableLog: true, expiredTime: 300000, reducerPath: null });
  });
  test('set enableLog as false', function () {
    (0, _config.setConfig)({ enableLog: false });
    expect(_config2.default).toEqual({ enableLog: false, expiredTime: 300000, reducerPath: null });
  });
  test('set config', function () {
    (0, _config.setConfig)({ enableLog: false, expiredTime: 30000, reducerPath: 'results' });
    expect(_config2.default).toEqual({ enableLog: false, expiredTime: 30000, reducerPath: 'results' });
  });
});