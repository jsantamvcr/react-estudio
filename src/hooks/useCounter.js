import {useState} from "react";

export const useCounter = (iniValue = 10) => {

    const [counter, setCounter] = useState(iniValue);

    /**
     * Increment a number add 1
     * */
    const increment = (value) => {
        setCounter(counter + value);
    }

    const decrement = (value) => {
        if (counter === 0) {
            return;
        }

        setCounter(counter - value);
    }

    const reset = () => {
        setCounter(iniValue);
    }


    return {
        counter,
        increment,
        decrement,
        reset
    }
}
