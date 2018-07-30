'use strict';

var _reducerPrototype = require('../reducerPrototype');

describe('reducerPrototype', function () {
  test('assignValueDeep', function () {
    var state = {};
    var nextState = (0, _reducerPrototype.assignValueDeep)(state, 'a', 1);
    expect(state).toEqual({});
    expect(nextState).toEqual({ a: 1 });
  });
  test('setValueDeep', function () {
    var state = {};
    var nextState = (0, _reducerPrototype.setValueDeep)(state, 'a', 1);
    expect(state).toEqual({ a: 1 });
    expect(nextState).toEqual(null);
  });
  test('assignValueDeep deep path', function () {
    expect((0, _reducerPrototype.assignValueDeep)({}, ['a', 'b'], 1)).toEqual({ a: { b: 1 } });
  });
  test('setValueDeep deep path', function () {
    var state = {};
    (0, _reducerPrototype.setValueDeep)(state, ['a', 'b'], 1);
    expect(state).toEqual({ a: { b: 1 } });
  });
  test('assignValueDeep single path', function () {
    expect((0, _reducerPrototype.assignValueDeep)({}, ['a'], 1)).toEqual({ a: 1 });
  });
  test('setValueDeep single path', function () {
    var state = {};
    (0, _reducerPrototype.setValueDeep)(state, ['a'], 1);
    expect(state).toEqual({ a: 1 });
  });

  var count = 0;
  console.warn = function () {
    return count++;
  };

  test('assignValueDeep empty path', function () {
    expect((0, _reducerPrototype.assignValueDeep)({}, [], { a: 1 })).toEqual({ a: 1 });
  });
  test('setValueDeep empty path', function () {
    var state = {};
    (0, _reducerPrototype.setValueDeep)(state, [], { a: 1 });
    expect(state).toEqual({ a: 1 });
  });
  test('assignValueDeep null path', function () {
    expect((0, _reducerPrototype.assignValueDeep)({}, null, { a: 1 })).toEqual({ a: 1 });
  });
  test('setValueDeep null path', function () {
    var state = {};
    (0, _reducerPrototype.setValueDeep)(state, null, { a: 1 });
    expect(state).toEqual({ a: 1 });
  });
  test('assignValueDeep null path specific', function () {
    expect((0, _reducerPrototype.assignValueDeep)({}, null, 1)).toEqual({});
  });
  test('setValueDeep null path specific', function () {
    var state = {};
    (0, _reducerPrototype.setValueDeep)(state, null, 1);
    expect(state).toEqual({});
  });

  test('warn when path invalid', function () {
    expect(count).toBe(6);
  });
});