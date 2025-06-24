import React, { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; ++i) {
        console.log('Here we go...');
    }

    return `${iterationNumber} iterations performed`;
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(10)
    const [show, setShow] = useState(true);

    const messageMemorize = useMemo(() => {
        return heavyStuff(counter);
    }, [counter]);

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr/>

            <h4>{messageMemorize}</h4>

            <button
                className="btn btn-outline-primary"
                onClick={() => increment(counter)}
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}
            >
                Show/Hide <small>{JSON.stringify(show)}</small>
            </button>

        </>
    );
};
