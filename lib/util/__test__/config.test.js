'use strict';

var _config = require('../config');

describe('config', function () {
  test('default', function () {
    expect(_config.reducerPath).toBe(null);
    expect(_config.expiredTime).toBe(300000);
    expect(_config.enableLog).toBe(true);
  });
  test('set nothing', function () {
    (0, _config.setConfig)();
    expect(_config.reducerPath).toBe(null);
    expect(_config.expiredTime).toBe(300000);
    expect(_config.enableLog).toBe(true);
  });
  test('set enableLog as false', function () {
    (0, _config.setConfig)({ enableLog: false });
    expect(_config.reducerPath).toBe(null);
    expect(_config.expiredTime).toBe(300000);
    expect(_config.enableLog).toBe(false);
  });
  test('set config', function () {
    (0, _config.setConfig)({ enableLog: false, expiredTime: 30000, reducerPath: 'result' });
    expect(_config.reducerPath).toBe('result');
    expect(_config.expiredTime).toBe(30000);
    expect(_config.enableLog).toBe(false);
  });
});