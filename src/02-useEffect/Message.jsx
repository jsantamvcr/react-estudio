import { useEffect, useState } from "react";

export const Message = () => {

    const [coords, setCoords] = useState({
        x: 0, y: 0
    });

    useEffect(() => {

        /*funcion a controlar*/
        const onMouseMove = ({ x, y }) => {
            setCoords({ x, y })
        }

        window.addEventListener('mousemove', onMouseMove);

        //clean up
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, [])

    return (
        <>
            <h1>Message</h1>
            <h3>User already exists</h3>

            <pre>
                {JSON.stringify(coords, null, 2)}
            </pre>
        </>
    );
}
