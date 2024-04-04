import React, {useState} from 'react';

import styles from './Counter.module.scss'

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {setCounter(prevCount => prevCount + 1)};

    return (
        <div>
            <h1>{counter}</h1>
            <button className={styles.btn} onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;