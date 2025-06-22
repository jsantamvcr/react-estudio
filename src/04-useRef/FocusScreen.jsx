import { useRef } from 'react';

export const FocusScreen = () => {

    const inputRef = useRef(null)

    const onclick = () => {

        inputRef.current.select()
    }


    return (
        <>
            <h1>Focus Screen</h1>
            <hr/>

            <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                ref={inputRef}
            />

            <input
                type="text"
                className="form-control mt-2"
                placeholder="Last name"
            />

            <button className="btn btn-outline-success mt-4 w-100"
                    onClick={onclick}
            >
                Set Focus
            </button>
        </>
    );
};
