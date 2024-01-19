import createRegion from '../createRegion';

describe('createRegion Reset', () => {
    test('reset', async () => {
        const region = createRegion<Record<string, string>>({});
        const {set, reset, getValue} = region;

        // snapshot(prevValue) is the initialvalue(same reference)
        set(prevValue => {
            prevValue['testKey'] = 'testValue';
            return prevValue;
        });

        expect(getValue()).toStrictEqual({'testKey': 'testValue'});

        reset();

        // `set` will modify the `initialValue`, causing the `initialValue` to be not the initial value when `reset`.
        expect(getValue()).toStrictEqual({});
    });
});
