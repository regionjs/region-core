import {describe, test, expect} from 'vitest';
import {region} from './region';

const {set, reset, resetAll, loadBy, getValue} = region;

describe('set', () => {
    test('string', () => {
        const result = set('user', 'a user');
        expect(result).toBe('a user');
    });

    test('array', () => {
        const target = [{id: 1, name: 'zhangcong'}, {id: 2, name: 'milly'}];
        const result = set('user', target);
        expect(result).toBe(target);
    });

    test('function', () => {
        const target = () => 'should be string';
        const result = set('user', target);
        expect(result).toBe('should be string');
    });

    test('reset', () => {
        const result = reset('user');
        expect(result).toBe(undefined);
    });

    test('resetAll', () => {
        set('user1', 'a user');
        set('user2', 'another user');

        expect(getValue('user1')).toBe('a user');
        expect(getValue('user2')).toBe('another user');

        reset('user1');

        expect(getValue('user1')).toBe(undefined);
        expect(getValue('user2')).toBe('another user');

        resetAll();

        expect(getValue('user1')).toBe(undefined);
        expect(getValue('user2')).toBe(undefined);
    });
});

describe('load', () => {
    test('fallback to set', async () => {
        // @ts-expect-error
        await loadBy('user', 'set a user')();
        expect(getValue('user')).toBe('set a user');
    });

    test('promise', async () => {
        // @ts-expect-error
        await loadBy('user', Promise.resolve('a user'))();
        expect(getValue('user')).toBe('a user');
    });

    test('asyncFunction', async () => {
        await loadBy('user', () => Promise.resolve('another user'))();
        expect(getValue('user')).toBe('another user');
    });

    test('format', async () => {
        await loadBy('user', () => Promise.resolve('0'), (_: string, user: string) => `${user}1`)();
        expect(getValue('user')).toBe('01');
    });

    test('format snapshot', async () => {
        await loadBy(
            'user',
            () => Promise.resolve('2'),
            (snapshot, user) => `${snapshot}${user}3`,
        )();
        expect(getValue('user')).toBe('0123');
    });

    test('reject', async () => {
        await loadBy('user', () => Promise.reject(new Error('2')))();
        expect(getValue('user')).toBe('0123');
    });

    test('params can be array', async () => {
        await loadBy('array', (array: unknown[]) => Promise.resolve(array.length))([0, 1]);
        expect(getValue('array')).toBe(2);
    });
});
