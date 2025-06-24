import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement.jsx';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    /*
    * useCallback: Memorizes the function so that it does not change on every render.
    * useState is used to manage the state of the counter.
    * value is the current state, and setCounter is the function to update it.
    * */
    const incrementFather = useCallback(
        (value) => {
            setCounter((count) => count + value);
        }, []);

    return (
        <>
            <h1>CallbackHook</h1>
            <br/>
            <h2>use callback hook: {counter}</h2>

            <ShowIncrement increment={incrementFather}/>
        </>
    );
};
