import { useEffect, useRef, useState } from 'react';
import * as shallowEqual from 'shallowequal';
import {
  getPayload,
  getLoadPayload,
  isAsync,
  formatLegacyKeys,
  selectLoading,
  selectResult,
  selectFetchTime,
  selectError,
  isValidConnectKey,
  hoc,
  createStore,
} from '../util';
import {
  ResultOrFunc,
  ResultFunc,
  AsyncFunctionOrPromise,
  AsyncFunctionOrPromiseWithoutParams,
  LoadOption,
  OptionOrReducer,
  DisplayType,
  ConnectOption,
  AsyncFunction,
} from '../types';

interface ToPromiseParams<TParams, V> {
  asyncFunction: AsyncFunctionOrPromise<TParams, V>;
  params: any;
}

const toPromise = async <TParams, V>({ asyncFunction, params }: ToPromiseParams<TParams, V>) => {
  if (typeof asyncFunction === 'function') {
    return (asyncFunction as AsyncFunction<TParams, V>)(params);
  }
  // promise
  return asyncFunction;
};

const getCombinedOption = <TParams, V>(
  optionOrReducer: OptionOrReducer<TParams, V> = {},
  exOption?: LoadOption<TParams, V>,
): LoadOption<TParams, V> => {
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

const getSetResult = <V>(resultOrFunc: ResultOrFunc<V>, snapshot?: V) => {
  if (typeof resultOrFunc === 'function') {
    return (resultOrFunc as ResultFunc<V>)(snapshot);
  }
  return resultOrFunc;
};

const createCombinedRegion = <T>() => {
  const private_store = createStore<T>();

  const set = <K extends keyof T>(key: K, resultOrFunc: ResultOrFunc<T[K]>) => {
    const snapshot = private_store.getAttribute(key, 'result');
    const result = getSetResult(resultOrFunc, snapshot);
    private_store.set({ key, result });
    return result;
  };

  const reset = private_store.reset;

  const load = async <TParams, K extends keyof T>(
    key: K,
    asyncFunction: AsyncFunctionOrPromise<TParams, T[K]>,
    optionOrReducer?: OptionOrReducer<TParams, T[K]>,
    exOption?: LoadOption<TParams, T[K]>,
  ) => {
    const option = getCombinedOption(optionOrReducer, exOption);
    if (!isAsync(asyncFunction)) {
      console.warn('set result directly');
      return set(key, asyncFunction as unknown as T[K]);
    }
    // @ts-ignore
    const params = option.params as TParams;
    return loadBy(key, asyncFunction, option)(params);
  };

  function loadBy <TParams, K extends keyof T>(
    key: K,
    asyncFunction: AsyncFunctionOrPromise<TParams, T[K]>,
    optionOrReducer?: OptionOrReducer<TParams, T[K]>,
    exOption?: LoadOption<TParams, T[K]>,
  ) {
    const option = getCombinedOption(optionOrReducer, exOption);

    return async (params?: TParams) => {
      // tslint:disable-next-line:no-parameter-reassignment
      params = params as TParams;
      const promise = toPromise({ asyncFunction, params });
      const loadPayload = getLoadPayload({ key, promise, params, option });
      private_store.load(loadPayload);
      try {
        const result = await promise;
        const currentPromise = private_store.getAttribute(key, 'promise');
        const snapshot = private_store.getAttribute(key, 'result');
        const payload = getPayload({ key, snapshot, result, params, option });
        if (promise !== currentPromise) {
          // store result for optimize purpose
          private_store.setCache(payload);
          return snapshot;
        }
        private_store.set(payload);
        return payload.result;
      } catch (error) {
        const result = private_store.getAttribute(key, 'result');
        private_store.set({ key, result, error });
        return result;
      }
    };
  }

  function getMap <K extends keyof T>(key: K): {[key: string]: T[K]};
  function getMap <K extends keyof T>(key: K[]): {[key: string]: T[K]}[];
  function getMap <K extends keyof T>(key: K | K[]) {
    if (Array.isArray(key)) {
      return key.map(k => private_store.getAttribute(k, 'results'));
    }
    return private_store.getAttribute(key, 'results');
  }

  function getId <K extends keyof T>(key: K): string | undefined;
  function getId <K extends keyof T>(key: K[]): (string | undefined)[];
  function getId <K extends keyof T>(key: K | K[]) {
    if (Array.isArray(key)) {
      return key.map(k => private_store.getAttribute(k, 'id'));
    }
    return private_store.getAttribute(key, 'id');
  }

  function getValue <K extends keyof T>(key: K): T[K] | undefined;
  function getValue <K extends keyof T>(key: K[]): (T[K] | undefined)[];
  function getValue <K extends keyof T>(key: K | K[]) {
    if (Array.isArray(key)) {
      return key.map(k => private_store.getAttribute(k, 'result'));
    }
    return private_store.getAttribute(key, 'result');
  }

  function getLoading <K extends keyof T>(key: K | K[]) {
    if (Array.isArray(key)) {
      return selectLoading(key.map(k => private_store.getAttribute(k, 'loading')));
    }
    return selectLoading([private_store.getAttribute(key, 'loading')]);
  }

  function getError <K extends keyof T>(key: K | K[]) {
    if (Array.isArray(key)) {
      return selectError(key.map(k => private_store.getAttribute(k, 'error')));
    }
    return selectError([private_store.getAttribute(key, 'error')]);
  }

  function getFetchTime <K extends keyof T>(key: K | K[]) {
    if (Array.isArray(key)) {
      return selectFetchTime(key.map(k => private_store.getAttribute(k, 'fetchTime')));
    }
    return selectFetchTime([private_store.getAttribute(key, 'fetchTime')]);
  }

  function getProps <K extends keyof T>(key: K | K[]) {
    const { keys, loadings, results, fetchTimes, errors } = formatLegacyKeys(key);

    const loading = getLoading(loadings);
    const resultMap = selectResult(keys, getValue(results) as T[K][]);
    const fetchTime = getFetchTime(fetchTimes);
    const error = getError(errors);

    return Object.assign({ loading, fetchTime, error }, resultMap);
  }

  const connectWith = <K extends keyof T>(key: K | K[], Display: DisplayType, option?: ConnectOption) => {
    return connect(key, option)(Display);
  };

  const connect = <K extends keyof T>(key: K | K[], { Loading, Error: ErrorComponent }: ConnectOption = {}) => (Display: DisplayType = Empty) => {
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

  type GetFn<TReturnType> = (key: any) => TReturnType;

  type EqualityFn = <T>(a?: T, b?: T) => boolean;

  const createHooks = <TReturnType>(getFn: GetFn<TReturnType>, equalityFn: EqualityFn) => {
    return <K extends keyof T>(key: K | K[]): TReturnType => {
      const [, forceUpdate] = useState({});
      const ref = useRef<TReturnType>();
      ref.current = getFn(key);
      useEffect(
        () => {
          let didUnsubscribe = false;

          const checkForUpdates = () => {
            if (didUnsubscribe) {
              return;
            }
            const nextValue = getFn(key);
            /** @see https://github.com/facebook/react/issues/14994 */
            if (!equalityFn(ref.current, nextValue)) {
              ref.current = nextValue;
              forceUpdate({});
            }
          };

          const unsubscribe = private_store.subscribe(checkForUpdates);

          checkForUpdates();

          return () => {
            didUnsubscribe = true;
            unsubscribe();
          };
        },
        [],
      );
      return ref.current;
    };
  };

  const useProps = createHooks(getProps, shallowEqual);

  // implement the common usage
  const useMap = createHooks(getMap as <K extends keyof T>(key: K) => {[key: string]: T[K]}, shallowEqual);

  // implement the common usage
  const useId = createHooks(getId as <K extends keyof T>(key: K) => string | undefined, strictEqual);

  // implement the common usage
  const useValue = createHooks(getValue as <K extends keyof T>(key: K) => T[K] | undefined, strictEqual);

  const useLoading = createHooks(getLoading, strictEqual);

  const useError = createHooks(getError, strictEqual);

  const useFetchTime = createHooks(getFetchTime, strictEqual);

  return {
    private_store,
    set,
    reset,
    load,
    loadBy,
    getProps,
    getMap,
    getId,
    getValue,
    getLoading,
    getError,
    getFetchTime,
    connectWith,
    connect,
    useProps,
    useValue,
    useMap,
    useId,
    useLoading,
    useError,
    useFetchTime,
  };
};

// tslint:disable-next-line:max-file-line-count
export default createCombinedRegion;
