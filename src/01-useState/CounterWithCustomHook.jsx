import useCounter from "../hooks/useCounter.js";

function CounterWithCustomHook() {

    const { counter, increment, decrement, reset } = useCounter()


    return (
        <>
            <hr/>
            <h1>Counter with custom Hook: {counter}</h1>
            <hr/>

            <button className="btn btn-primary" onClick={() => increment(1)}>+1</button>
            <button className="btn btn-primary" onClick={reset}>reset</button>
            <button className="btn btn-primary" onClick={() => decrement(2)}>-1</button>
        </>
    );
}

export default CounterWithCustomHook;