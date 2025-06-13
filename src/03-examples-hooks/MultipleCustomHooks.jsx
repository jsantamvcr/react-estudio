import React from "react";
import { useFetch, useCounter } from "../hooks";
import { LoadingMessage } from "./LoadingMessage.jsx";
import { PokemonCard } from "./PokemonCard.jsx";


export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter(1)
    const { data, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

    const { id, name } = !!data && data;


    return <>
        <h1>Multiple Custom Hooks</h1>

        <h2>Pokemon Lists</h2>

        {isLoading ? <LoadingMessage/> : <PokemonCard name={name} sprites={[
            data.sprites.front_default,
            data.sprites.back_default,
            data.sprites.front_shiny,
            data.sprites.back_shiny
        ]} id={id}/>}

        <button className='btn btn-outline-secondary mt-2'
                onClick={() => counter > 1 ? decrement(1) : null}>
            previous
        </button>
        <button className='btn btn-outline-primary mt-2'
                onClick={() => increment(1)}>
            next
        </button>

    </>;
}
