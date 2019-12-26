import createCombinedRegion from '../createCombinedRegion';
import { AsyncFunctionOrPromise, LoadOption, OptionOrReducer, ResultOrFunc } from '../types';
import { hoc } from './hoc';

export const createRegion = <V>(initialValue?: V) => {
  const region = createCombinedRegion<{value: V}>();

  const set = (resultOrFunc: ResultOrFunc<V>) => {
    return region.set('value', resultOrFunc);
  };

  const load = <TParams>(
    asyncFunction: AsyncFunctionOrPromise<TParams, V>,
    option: OptionOrReducer<TParams, V> = {},
    exOption?: LoadOption<TParams, V>,
  ) => {
    return region.load('value', asyncFunction, option, exOption);
  };

  const loadBy = <TParams>(
    asyncFunction: AsyncFunctionOrPromise<TParams, V>,
    option: OptionOrReducer<TParams, V> = {},
    exOption?: LoadOption<TParams, V>,
  ) => {
    return region.loadBy('value', asyncFunction, option, exOption);
  };

  const getProps = () => {
    return region.getProps('value');
  };

  const getMap = () => {
    return region.getMap('value');
  };

  const getId = () => {
    return region.getId('value');
  };

  const getValue = () => {
    return region.getValue('value');
  };

  const getLoading = () => {
    return region.getLoading('value');
  };

  const getError = () => {
    return region.getError('value');
  };

  const getFetchTime = () => {
    return region.getFetchTime('value');
  };

  const useProps = () => {
    return region.useProps('value');
  };

  const useMap = () => {
    return region.useMap('value');
  };

  const useId = () => {
    return region.useId('value');
  };

  const useValue = () => {
    return region.useValue('value');
  };

  const useLoading = () => {
    return region.useLoading('value');
  };

  const useError = () => {
    return region.useError('value');
  };

  const useFetchTime = () => {
    return region.useFetchTime('value');
  };

  const connect = (Component: any, alias: string = 'value') => {
    return hoc({ Component, alias, useProps });
  };

  if (initialValue !== undefined) {
    set(initialValue);
  }

  return {
    set,
    load,
    loadBy,
    getProps,
    getMap,
    getId,
    getValue,
    getLoading,
    getError,
    getFetchTime,
    useProps,
    useMap,
    useId,
    useValue,
    useLoading,
    useError,
    useFetchTime,
    connect,
  };
};

export default createRegion;
