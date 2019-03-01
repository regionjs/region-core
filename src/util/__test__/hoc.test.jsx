import React from 'react';
import hoc from '../hoc';

const Display = ({ withLabel }) => `Display with ${withLabel}`;
const Loading = ({ withLabel }) => `Loading with ${withLabel}`;
const Error = ({ withLabel }) => `Error with ${withLabel}`;

describe('hoc', () => {
  test('display', () => {
    const ConnectWith = hoc({ Display, Loading, Error, useProps: () => ({}) });
    const props = { withLabel: 'label' };
    expect(ConnectWith(props)).toEqual(<Display withLabel="label" />);
  });

  test('loading', () => {
    const ConnectWith = hoc({ Display, Loading, Error, useProps: () => ({ loading: true }) });
    const props = { withLabel: 'label' };
    expect(ConnectWith(props)).toEqual(<Loading loading withLabel="label" />);
  });

  test('error', () => {
    const error = new Error('error');
    const ConnectWith = hoc({ Display, Loading, Error, useProps: () => ({ error }) });
    const props = { withLabel: 'label', error };
    expect(ConnectWith(props)).toEqual(<Error error={error} withLabel="label" />);
  });
});
