import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from '../slice/counterSlice';

describe('counterSlice.test', () => {
    const state: CounterSchema = { value: 10 };

    test('increment', () => {
        expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual({ value: 11 });
    });

    test('decrement', () => {
        expect(counterReducer(state as CounterSchema, counterActions.decrement())).toEqual({ value: 9 });
    });

    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
