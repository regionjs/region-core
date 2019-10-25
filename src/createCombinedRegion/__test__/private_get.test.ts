import { region } from './region';

const {
  private_getLoadings: getLoadings,
  private_getResults: getResults,
  private_getFetchTimes: getFetchTimes,
  private_getErrors: getErrors,
  getProps,
  private_store: store,
} = region;

let state: any = null;
store.getState = () => state;

const setState = (nextState: any) => {
  state = nextState;
};

describe('private_get', () => {
  test('get things from nothing', () => {
    // NOTE loading is true because we want to display loading ui when state is undefined.
    setState(undefined);
    expect(getLoadings('a')).toEqual(true);
    expect(getResults('a')).toEqual(undefined);
    expect(getFetchTimes('a')).toEqual(undefined);
    expect(getProps('a')).toEqual({
      loading: true,
      error: undefined,
      a: undefined,
    });

    expect(getLoadings(['a', 'b'])).toEqual([true, true]);
    expect(getResults(['a', 'b'])).toEqual([undefined, undefined]);
    expect(getFetchTimes(['a', 'b'])).toEqual([undefined, undefined]);
    expect(getProps(['a', 'b'])).toEqual({
      loading: true,
      error: undefined,
      a: undefined,
      b: undefined,
    });
  });

  test('get things from initial state', () => {
    setState({});
    expect(getLoadings('a')).toEqual(true);
    expect(getResults('a')).toEqual(undefined);
    expect(getFetchTimes('a')).toEqual(undefined);
    expect(getProps('a')).toEqual({
      loading: true,
      a: undefined,
    });

    expect(getLoadings(['a', 'b'])).toEqual([true, true]);
    expect(getResults(['a', 'b'])).toEqual([undefined, undefined]);
    expect(getFetchTimes(['a', 'b'])).toEqual([undefined, undefined]);
    expect(getProps(['a', 'b'])).toEqual({
      loading: true,
      a: undefined,
      b: undefined,
    });
  });

  test('get things from start loading', () => {
    setState({
      a: { loading: true },
    });
    expect(getLoadings('a')).toEqual(true);
    expect(getResults('a')).toEqual(undefined);
    expect(getFetchTimes('a')).toEqual(undefined);
    expect(getProps('a')).toEqual({
      loading: true,
      a: undefined,
    });

    expect(getLoadings(['a', 'b'])).toEqual([true, true]);
    expect(getResults(['a', 'b'])).toEqual([undefined, undefined]);
    expect(getFetchTimes(['a', 'b'])).toEqual([undefined, undefined]);
    expect(getProps(['a', 'b'])).toEqual({
      loading: true,
      a: undefined,
      b: undefined,
    });
  });

  test('treat undefined', () => {
    setState({
      a: { loading: true },
    });
    expect(getLoadings('b')).toEqual(true);
    expect(getLoadings('b')).toEqual(true);
  });

  test('get things from stop loading', () => {
    setState({
      a: {
        loading: false,
        fetchTime: 999,
        result: { name: '66', type: 'cat' },
      },
    });
    expect(getLoadings('a')).toEqual(false);
    expect(getResults('a')).toEqual({ name: '66', type: 'cat' });
    expect(getFetchTimes('a')).toEqual(999);
    expect(getProps('a')).toEqual({
      loading: false,
      fetchTime: 999,
      a: { name: '66', type: 'cat' },
    });

    expect(getLoadings(['a', 'b'])).toEqual([false, true]);
    expect(getResults(['a', 'b'])).toEqual([{ name: '66', type: 'cat' }, undefined]);
    expect(getFetchTimes(['a', 'b'])).toEqual([999, undefined]);
    expect(getProps(['a', 'b'])).toEqual({
      loading: true,
      a: { name: '66', type: 'cat' },
      b: undefined,
    });
  });

  test('getProps with complex key', () => {
    expect(getProps({ key: ['a', 'b'], result:['b'] })).toEqual({
      loading: true,
      b: undefined,
    });
    expect(getProps({ loading: ['a', 'b'], result:['b'] })).toEqual({
      loading: true,
      b: undefined,
    });
  });

  test('getLoadings from all resolved', () => {
    setState({
      a: { loading: false },
      b: { loading: false },
    });
    expect(getLoadings(['a', 'b'])).toEqual([false, false]);
  });

  test('getErrors', () => {
    const errorA = new Error('error a');
    setState({
      a: {
        loading: false,
        error: errorA,
      },
      b: {
        loading: false,
        error: undefined,
      },
    });
    expect(getErrors(['a', 'b'])).toEqual([errorA, undefined]);
    expect(getErrors('a')).toEqual(errorA);
    expect(getErrors('b')).toEqual(undefined);
    expect(getProps('a').error).toEqual(new Error('error a'));
    expect(getProps(['a', 'b']).error).toEqual(new Error('error a'));

    const errorB = new Error('error b');
    setState({
      a: {
        loading: false,
        error: errorA,
      },
      b: {
        loading: false,
        error: errorB,
      },
    });
    expect(getErrors(['a', 'b'])).toEqual([errorA, errorB]);
    expect(getProps(['a', 'b']).error).toEqual(new Error('error a, error b'));
  });
});