import {describe, test, expect} from 'vitest';
import {createRegion} from '..';
import {delayLoop} from '../util/delayLoop';

const asyncFunc1 = async () => {
    await delayLoop();
    return 'a';
};

const asyncFunc2 = async () => {
    await delayLoop(2);
    return 'b';
};

describe('strategy', () => {
    test('fn', async () => {
        const result1 = await Promise.race([asyncFunc1(), asyncFunc2()]);
        const result2 = await Promise.race([asyncFunc2(), asyncFunc1()]);
        expect(result1).toBe('a');
        expect(result2).toBe('a');
    });

    test('acceptSequenced 1', async () => {
        const region = createRegion();
        const load1 = region.loadBy(asyncFunc1);
        const load2 = region.loadBy(asyncFunc2);
        await load1();
        expect(region.getValue()).toBe('a');
        await load2();
        expect(region.getValue()).toBe('b');
    });

    test('acceptSequenced 2', async () => {
        const region = createRegion();
        const load1 = region.loadBy(asyncFunc1);
        const load2 = region.loadBy(asyncFunc2);
        const promises = [load1(), load2()];
        await Promise.race(promises);
        expect(region.getValue()).toBe('a');
        await Promise.all(promises);
        expect(region.getValue()).toBe('b');
    });

    test('acceptSequenced 3', async () => {
        const region = createRegion();
        const load1 = region.loadBy(asyncFunc1);
        const load2 = region.loadBy(asyncFunc2);
        const promises = [load2(), load1()];
        await Promise.race(promises);
        expect(region.getValue()).toBe('a');
        await Promise.all(promises);
        expect(region.getValue()).toBe('a');
    });

    test('acceptLatest 1', async () => {
        const region = createRegion(undefined, {strategy: 'acceptLatest'});
        const load1 = region.loadBy(asyncFunc1);
        const load2 = region.loadBy(asyncFunc2);
        await load1();
        expect(region.getValue()).toBe('a');
        await load2();
        expect(region.getValue()).toBe('b');
    });

    test('acceptLatest 2', async () => {
        const region = createRegion(undefined, {strategy: 'acceptLatest'});
        const load1 = region.loadBy(asyncFunc1);
        const load2 = region.loadBy(asyncFunc2);
        const promises = [load1(), load2()];
        await Promise.race(promises);
        expect(region.getValue()).toBe(undefined);
        await Promise.all(promises);
        expect(region.getValue()).toBe('b');
    });

    test('acceptLatest 3', async () => {
        const region = createRegion(undefined, {strategy: 'acceptLatest'});
        const load1 = region.loadBy(asyncFunc1);
        const load2 = region.loadBy(asyncFunc2);
        const promises = [load2(), load1()];
        await Promise.race(promises);
        expect(region.getValue()).toBe('a');
        await Promise.all(promises);
        expect(region.getValue()).toBe('a');
    });

    test('acceptEvery 1', async () => {
        const region = createRegion(undefined, {strategy: 'acceptEvery'});
        const load1 = region.loadBy(asyncFunc1);
        const load2 = region.loadBy(asyncFunc2);
        await load1();
        expect(region.getValue()).toBe('a');
        await load2();
        expect(region.getValue()).toBe('b');
    });

    test('acceptEvery 2', async () => {
        const region = createRegion(undefined, {strategy: 'acceptEvery'});
        const load1 = region.loadBy(asyncFunc1);
        const load2 = region.loadBy(asyncFunc2);
        const promises = [load1(), load2()];
        await Promise.race(promises);
        expect(region.getValue()).toBe('a');
        await Promise.all(promises);
        expect(region.getValue()).toBe('b');
    });

    test('acceptEvery 3', async () => {
        const region = createRegion(undefined, {strategy: 'acceptEvery'});
        const load1 = region.loadBy(asyncFunc1);
        const load2 = region.loadBy(asyncFunc2);
        const promises = [load2(), load1()];
        await Promise.race(promises);
        expect(region.getValue()).toBe('a');
        await Promise.all(promises);
        expect(region.getValue()).toBe('b');
    });

    test('acceptFirst 1', async () => {
        const region = createRegion(undefined, {strategy: 'acceptFirst'});
        const load1 = region.loadBy(asyncFunc1);
        const load2 = region.loadBy(asyncFunc2);
        await load1();
        expect(region.getValue()).toBe('a');
        await load2();
        expect(region.getValue()).toBe('a');
    });

    test('acceptFirst 2', async () => {
        const region = createRegion(undefined, {strategy: 'acceptFirst'});
        const load1 = region.loadBy(asyncFunc1);
        const load2 = region.loadBy(asyncFunc2);
        const promises = [load1(), load2()];
        await Promise.race(promises);
        expect(region.getValue()).toBe('a');
        await Promise.all(promises);
        expect(region.getValue()).toBe('a');
    });

    test('acceptFirst 3', async () => {
        const region = createRegion(undefined, {strategy: 'acceptFirst'});
        const load1 = region.loadBy(asyncFunc1);
        const load2 = region.loadBy(asyncFunc2);
        const promises = [load2(), load1()];
        await Promise.race(promises);
        expect(region.getValue()).toBe('b');
        await Promise.all(promises);
        expect(region.getValue()).toBe('b');
    });
});
