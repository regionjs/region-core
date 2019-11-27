import * as shallowEqual from 'shallowequal';
import {
  getPayload,
  getLoadPayload,
  isAsync,
  formatKeys,
  selectLoading,
  selectResult,
  selectFetchTime,
  selectError,
  isValidConnectKey,
  hoc,
  createHooks,
  createStore,
} from '../util';
import {
  EntityName,
  ResultOrFunc,
  AsyncFunction,
  Params,
  LegacyKey,
  LoadOption,
  OptionOrReducer,
  Key,
  DisplayType,
  ConnectOption,
  AnyObject,
  PropsKey,
} from '../types';

interface ToPromiseParams {
  asyncFunction: AsyncFunction;
  params: any;
}

const toPromise = async ({ asyncFunction, params }: ToPromiseParams) => {
  if (typeof asyncFunction === 'function') {
    return asyncFunction(params);
  }
  // promise
  return asyncFunction;
};

type GetCombinedOption = (optionOrReducer?: OptionOrReducer, exOption?: LoadOption) => LoadOption;

const getCombinedOption: GetCombinedOption = (optionOrReducer = {}, exOption) => {
  if (typeof optionOrReducer === 'function') {
    if (exOption) {
      return { reducer: optionOrReducer, ...exOption };
    }
    return { reducer: optionOrReducer };
  }
  return optionOrReducer;
};

const Empty = () => null;

const strictEqual = (a: any, b: any) => a === b;

const createCombinedRegion = () => {
  const private_store = createStore();

  const private_get = (key: EntityName, attribute: PropsKey) => {
    const { getState } = private_store;
    const state = getState() || {};
    const props = state[key] || {};
    return props[attribute];
  };

  const set = (key: EntityName, resultOrFunc: ResultOrFunc) => {
    const snapshot = private_get(key, 'result');
    let formattedResult = resultOrFunc;
    if (typeof resultOrFunc === 'function') {
      formattedResult = resultOrFunc(snapshot);
    }
    private_store.set({ key, result: formattedResult });
    return formattedResult;
  };

  const reset = private_store.reset;

  const load = async (key: EntityName, asyncFunction: AsyncFunction, optionOrReducer?: OptionOrReducer, exOption?: LoadOption) => {
    const option = getCombinedOption(optionOrReducer, exOption);
    if (!isAsync(asyncFunction)) {
      console.warn('set result directly');
      return set(key, asyncFunction);
    }
    return loadBy(key, asyncFunction, option)(option.params);
  };

  const loadBy = (key: EntityName, asyncFunction: AsyncFunction, optionOrReducer?: OptionOrReducer, exOption?: LoadOption) => {
    const option = getCombinedOption(optionOrReducer, exOption);

    return async (params?: Params) => {
      const promise = toPromise({ asyncFunction, params });
      const loadPayload = getLoadPayload({ key, promise, params, option });
      private_store.load(loadPayload);
      try {
        const result = await promise;
        const currentPromise = private_get(key, 'promise');
        const snapshot = private_get(key, 'result');
        const payload = getPayload({ key, snapshot, result, params, option });
        if (promise !== currentPromise) {
          // store result for optimize purpose
          private_store.set(payload, true);
          return snapshot;
        }
        private_store.set(payload);
        return payload.result;
      } catch (error) {
        const result = private_get(key, 'result');
        private_store.set({ key, result, error });
        return result;
      }
    };
  };

  const getValue = (key: Key) => {

    if (Array.isArray(key)) {
      return key.map(k => private_get(k, 'result'));
    }
    return private_get(key, 'result');
  };

  const getLoading = (key: Key) => {
    if (Array.isArray(key)) {
      return selectLoading(key.map(k => private_get(k, 'loading')));
    }
    return selectLoading([private_get(key, 'loading')]);
  };

  const getError = (key: Key) => {
    if (Array.isArray(key)) {
      return selectError(key.map(k => private_get(k, 'error')));
    }
    return selectError([private_get(key, 'error')]);
  };

  const getFetchTime = (key: Key) => {
    if (Array.isArray(key)) {
      return selectFetchTime(key.map(k => private_get(k, 'fetchTime')));
    }
    return selectFetchTime([private_get(key, 'fetchTime')]);
  };

  const getProps = (key: LegacyKey) => {
    const { keys, loadings, results, fetchTimes, errors } = formatKeys(key);

    const loading = getLoading(loadings);
    const resultMap = selectResult(keys, getValue(results));
    const fetchTime = getFetchTime(fetchTimes);
    const error = getError(errors);

    return Object.assign({ loading, fetchTime, error }, resultMap);
  };

  const connectWith = (key: LegacyKey, Display: DisplayType, option?: ConnectOption) => {
    return connect(key, option)(Display);
  };

  const connect = (key: LegacyKey, { Loading, Error: ErrorComponent }: ConnectOption = {}) => (Display: DisplayType = Empty) => {
    if (!isValidConnectKey(key)) {
      throw new Error('invalid key.');
    }
    return hoc({
      Display,
      Loading: Loading || Display,
      Error: ErrorComponent || Display,
      useProps,
      key,
    });
  };

  const useProps: (key: Key) => AnyObject = createHooks({ getFn: getProps, equalityFn: shallowEqual, store: private_store });

  const useValue = createHooks({ getFn: getValue, equalityFn: strictEqual, store: private_store });

  const useLoading = createHooks({ getFn: getLoading, equalityFn: strictEqual, store: private_store });

  const useError = createHooks({ getFn: getError, equalityFn: strictEqual, store: private_store });

  const useFetchTime = createHooks({ getFn: getFetchTime, equalityFn: strictEqual, store: private_store });

  return {
    private_store,
    set,
    reset,
    load,
    loadBy,
    getProps,
    getValue,
    getLoading,
    getError,
    getFetchTime,
    connectWith,
    connect,
    useProps,
    useValue,
    useLoading,
    useError,
    useFetchTime,
  };
};

// tslint:disable-next-line:max-file-line-count
export default createCombinedRegion;
