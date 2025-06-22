import React from "react";
import { useFetch, useCounter } from "../hooks";
import { LoadingMessage, PokemonCard } from '../03-examples-hooks';

export const Layout = () => {

    const { counter, increment, decrement } = useCounter(1)
    const { data, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

    const {
        name = '',
        id = 0,
        sprites = {}
    } = data || {};

    return (
        <>
            <h1>Multiple Custom Hooks</h1>
            <h2>Pokemon Lists</h2>


            {isLoading
                ? <LoadingMessage/>
                : (
                    <PokemonCard
                        id={id}
                        name={name}
                        sprites={[
                            sprites?.front_default || '',
                            sprites?.back_default || '',
                            sprites?.front_shiny || '',
                            sprites?.back_shiny || ''
                        ]}
                    />
                )
            }
            <button
                className='btn btn-outline-secondary mt-2'
                onClick={() => counter > 1 ? decrement(1) : null}>
                {'<<'}
            </button>
            <button
                className='btn btn-outline-primary mt-2'
                onClick={() => increment(1)}>
                {'>>'}
            </button>

        </>
    );
}
