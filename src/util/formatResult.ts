import {
  LoadOption,
  LoadPayload,
  Id,
  IdFunc,
  Payload,
} from '../types';

const formatResult = <T, K extends keyof T, TParams>({ key, snapshot, result, params, option }: GetPayloadParams<T, K, TParams>) => {
  const { format, reducer } = option;
  if (typeof result === 'function') {
    // never
    return (result as any)(snapshot);
  }
  if (typeof reducer === 'function') {
    const formatted = reducer(snapshot, result, params);
    return formatted;
  }
  const formatted = typeof format === 'function' ? format(result, snapshot) : result;
  return formatted;
};

interface GetIdParams<TParams> {
  id: Id | IdFunc<TParams> | undefined;
  params: TParams;
}

const getId = <TParams>({ id, params }: GetIdParams<TParams>): Id => {
  if (typeof id === 'function') {
    return id(params);
  }
  // undefined as 'undefined'
  return id as string;
};

interface GetPayloadWithIdParams<T, K extends keyof T, TParams> {
  key: K;
  result: T[K];
  snapshot?: T[K];
  params: TParams;
  option: LoadOption<TParams, T[K]>;
}

const getResult = <T, K extends keyof T, TParams>({ key, result, snapshot, params, option }: GetPayloadWithIdParams<T, K, TParams>) => {
  const { format, reducer } = option;
  if (typeof reducer === 'function') {
    return reducer(snapshot, result, params);
  }
  return typeof format === 'function' ? format(result, snapshot) : result;
};

const getPayloadWithId = <T, K extends keyof T, TParams>(
  { key, result, snapshot, params, option }: GetPayloadWithIdParams<T, K, TParams>,
) => {
  const { id } = option;
  const formatId = getId({ id, params });

  const formattedResult = getResult({ key, result, snapshot, params, option });
  return { key, id: formatId, result: formattedResult };
};

interface GetPayloadParams<T, K extends keyof T, TParams> {
  key: K;
  result: T[K];
  snapshot?: T[K];
  params: TParams;
  option: LoadOption<TParams, T[K]>;
}

export const getPayload = <T, K extends keyof T, TParams>(
  { key, snapshot, result, params, option }: GetPayloadParams<T, K, TParams>,
): Payload<T, K> => {
  const { id } = option;

  if (id !== undefined) {
    return getPayloadWithId({ key, result, snapshot, params, option });
  }
  const formattedResult = formatResult({ key, snapshot, result, params, option });
  return { key, result: formattedResult };
};

interface GetLoadPayloadParams<T, K extends keyof T, TParams> {
  key: K;
  promise: Promise<T[K]>;
  params: TParams;
  option: LoadOption<TParams, T[K]>;
}

export const getLoadPayload = <T, K extends keyof T, TParams>(
  { key, promise, params, option }: GetLoadPayloadParams<T, K, TParams>,
): LoadPayload<T, K> => {
  const { id } = option;
  const formatId = getId({ id, params });
  return { key, promise, id: formatId };
};
