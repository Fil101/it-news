import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();

    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    /* eslint-disable */
    return (
        <div>
            <h1 data-testid="value-title">value = {counterValue}</h1>
            <button
                onClick={increment}
                data-testid="increment-btn"
            >
                Increment
            </button>
            <button
                onClick={decrement}
                data-testid="decrement-btn"
            >
                Decrement
            </button>
        </div>
    );
};
