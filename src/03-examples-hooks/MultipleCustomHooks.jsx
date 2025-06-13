import React from "react";
import {useFetch, useCounter} from "../hooks";

export const MultipleCustomHooks = () => {

    const {counter, increment, decrement} = useCounter(1)
    const {data, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)


    return (
        <>
            <h1>Multiple Custom Hooks</h1>

            <h2>Pokemon Lists</h2>

            {isLoading && <p>loading...</p>}
            <p>{data?.name}</p>

            <button className='btn btn-outline-secondary mt-2'
                    onClick={() => counter > 1 ? decrement(1) : null}>anterior
            </button>
            <button className='btn btn-outline-primary mt-2' onClick={() => increment(1)}>next</button>

        </>
    );
}
