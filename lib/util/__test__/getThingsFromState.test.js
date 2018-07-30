'use strict';

var _getThingsFromState = require('../getThingsFromState');

describe('getThingsFromState', function () {
  test('get things from nothing', function () {
    // NOTE loading is true because we want to display loading ui when state is undefined.
    var state = undefined;
    expect((0, _getThingsFromState.getLoading)(state, 'a')).toEqual(true);
    expect((0, _getThingsFromState.getResults)(state, 'a')).toEqual(undefined);
    expect((0, _getThingsFromState.getFetchTimes)(state, 'a')).toEqual(undefined);
    expect((0, _getThingsFromState.getLoading)(state, ['a', 'b'])).toEqual(true);
    expect((0, _getThingsFromState.getResults)(state, ['a', 'b'])).toEqual([undefined, undefined]);
    expect((0, _getThingsFromState.getFetchTimes)(state, ['a', 'b'])).toEqual([undefined, undefined]);
  });
  test('get things from initial state', function () {
    var state = {};
    expect((0, _getThingsFromState.getLoading)(state, 'a')).toEqual(true);
    expect((0, _getThingsFromState.getResults)(state, 'a')).toEqual(undefined);
    expect((0, _getThingsFromState.getFetchTimes)(state, 'a')).toEqual(undefined);
    expect((0, _getThingsFromState.getLoading)(state, ['a', 'b'])).toEqual(true);
    expect((0, _getThingsFromState.getResults)(state, ['a', 'b'])).toEqual([undefined, undefined]);
    expect((0, _getThingsFromState.getFetchTimes)(state, ['a', 'b'])).toEqual([undefined, undefined]);
  });
  test('get things from start loading', function () {
    var state = {
      loadings: { a: true }
    };
    expect((0, _getThingsFromState.getLoading)(state, 'a')).toEqual(true);
    expect((0, _getThingsFromState.getResults)(state, 'a')).toEqual(undefined);
    expect((0, _getThingsFromState.getFetchTimes)(state, 'a')).toEqual(undefined);
    expect((0, _getThingsFromState.getLoading)(state, ['a', 'b'])).toEqual(true);
    expect((0, _getThingsFromState.getResults)(state, ['a', 'b'])).toEqual([undefined, undefined]);
    expect((0, _getThingsFromState.getFetchTimes)(state, ['a', 'b'])).toEqual([undefined, undefined]);
  });
  test('get things from stop loading', function () {
    var state = {
      loadings: { a: false },
      fetchTimes: { a: 0 },
      results: { a: { name: '66', type: 'cat' } }
    };
    expect((0, _getThingsFromState.getLoading)(state, 'a')).toEqual(false);
    expect((0, _getThingsFromState.getResults)(state, 'a')).toEqual({ name: '66', type: 'cat' });
    expect((0, _getThingsFromState.getFetchTimes)(state, 'a')).toEqual(0);
    expect((0, _getThingsFromState.getLoading)(state, ['a', 'b'])).toEqual(false);
    expect((0, _getThingsFromState.getResults)(state, ['a', 'b'])).toEqual([{ name: '66', type: 'cat' }, undefined]);
    expect((0, _getThingsFromState.getFetchTimes)(state, ['a', 'b'])).toEqual([0, undefined]);
  });
});