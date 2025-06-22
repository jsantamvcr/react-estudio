import React, { useState } from 'react';
import { useCounter } from '../hooks';
import { Small } from './Small.jsx';

export const Memorize = () => {

    const { counter, increment } = useCounter(10)

    const [show, setShow] = useState(true);


    return (
        <>

            <h1>Counter: <Small value={counter}/></h1>

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
