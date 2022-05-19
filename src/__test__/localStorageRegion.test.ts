import {createRegion} from '..';

const toRaw = (key: string) => `${key}/value`;

describe('localStorageRegion', () => {
    test('basic', async () => {
        const region = createRegion(false, {withLocalStorageKey: 'key'});
        expect(region.getValue()).toBe(false);
        region.set(true);
        expect(region.getValue()).toBe(true);
        expect(window.localStorage.getItem(toRaw('key'))).toBe('true');
        region.set(v => !v);
        expect(region.getValue()).toBe(false);
        expect(window.localStorage.getItem(toRaw('key'))).toBe('false');
    });

    test('set undefined to removeItem', () => {
        const region = createRegion<boolean | undefined>(undefined, {withLocalStorageKey: 'key2'});
        region.set(false);
        expect(region.getValue()).toBe(false);
        region.set(undefined);
        expect(window.localStorage.getItem(toRaw('key2'))).toBe(null);
        expect(region.getValue()).toBe(undefined);
    });

    test('use localStorage value', () => {
        window.localStorage.setItem(toRaw('key3'), '"bar"');
        const region = createRegion('foo', {withLocalStorageKey: 'key3'});
        expect(region.getValue()).toBe('bar');
    });

    test('unexpected value will fallback to initial value', () => {
        window.localStorage.setItem(toRaw('key4'), 'bar');
        const region = createRegion('foo', {withLocalStorageKey: 'key4'});
        expect(region.getValue()).toBe('foo');
    });
});
