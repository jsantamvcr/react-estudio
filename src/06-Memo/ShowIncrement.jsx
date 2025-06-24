import React from 'react';
/*
    * ShowIncrement component is a functional component that receives an increment function as a prop.
    * It is wrapped in React.memo to prevent unnecessary re-renders.
    * The component renders a button that, when clicked, calls the increment function passed from the parent component.
 * */
export const ShowIncrement = React.memo(({ increment }) => {


    console.log('Render ShowIncrement again');

    return (
        <>

            <button
                className="btn btn-primary"
                onClick={() => increment(5)}
            >
                Show Increment
            </button>

        </>
    );
});

