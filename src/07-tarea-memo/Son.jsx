import React from 'react'

export const Son = React.memo(({ num, increment }) => {

    console.log('Render Son', num);
    return (
        <button
            className="btn btn-primary mr-3"
            onClick={() => increment(num)}
        >
            {num}
        </button>
    )
})
