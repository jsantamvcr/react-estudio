import React, { useCallback } from 'react'
import { Son } from './Son.jsx'
import { useState } from 'react';

export const Father = () => {

    const numbers = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0);


    const increment = useCallback((num) => {
        setValor((value) => value + num)
    }, []);

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: {valor} </p>

            <hr/>

            {
                numbers.map(n => (
                    <Son
                        key={n}
                        num={n}
                        increment={increment}
                    />
                ))
            }
            {/* <Son /> */}
        </div>
    )
}
