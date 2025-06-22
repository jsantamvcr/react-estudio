import {useState} from 'react';
import CounterWithCustomHook from "./CounterWithCustomHook.jsx";

function CounterApp() {

    const [state, setCounter] = useState({
        counter1: 0,
        counter2: 2,
        counter3: 3,
        counter4: 4,
        counter5: 50,
    });

    const {
        counter1,
        counter2,
        counter3,
        counter4,
        counter5
    } = state;

    const addCounter = () => {
        setCounter({
            ...state,
            counter1: counter1 + 1,
        });
    };

    return (
        <>
            <hr/>
            <table className="table">
                <thead>
                <tr>
                    <th>Counter 1</th>
                    <th>Counter 2</th>
                    <th>Counter 3</th>
                    <th>Counter 4</th>
                    <th>Counter 5</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{counter1}</td>
                    <td>{counter2}</td>
                    <td>{counter3}</td>
                    <td>{counter4}</td>
                    <td>{counter5}</td>
                </tr>
                </tbody>
            </table>

            <button
                className="btn btn-primary"
                onClick={addCounter}>
                Increment counter +
            </button>

            <CounterWithCustomHook/>
        </>
    );
}

export default CounterApp;