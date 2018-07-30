'use strict';

var _logger = require('../logger');

describe('logger', function () {
  test('debug trip', function () {
    var trip = [];
    console.debug = function () {
      return trip.push('debug');
    };
    (0, _logger.debug)('a', 'b');
    expect(trip).toEqual(['debug']);
  });
  test('group trip', function () {
    var trip = [];
    console.groupCollapsed = function () {
      return trip.push('groupCollapsed');
    };
    console.debug = function () {
      return trip.push('debug');
    };
    console.groupEnd = function () {
      return trip.push('groupEnd');
    };
    (0, _logger.group)('a', 'b', 'c', 'd');
    expect(trip).toEqual(['groupCollapsed', 'debug', 'debug', 'groupEnd']);
  });
});