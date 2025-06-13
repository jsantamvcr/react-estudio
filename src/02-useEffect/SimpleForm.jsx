import { useEffect, useState } from "react";
import { Message } from "./Message.jsx";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: "john",
        email: "jsantamv@live.com",
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value, /*Propiedad computada de JS donde Name hace del nombre del name del elemento html*/
        });
    }

    /* Single responsibility */
    // useEffect(() => {
    //     console.log('formState');
    // }, []);
    //
    // useEffect(() => {
    //     console.log('formState');
    // }, [formState]);
    //
    // useEffect(() => {
    //     console.log('some Email');
    // }, [email]);

    return (
        <>
            <h1> Simple Form - useEffect Hook </h1>

            <hr/>
            <input
                className="form-control"
                type="text"
                placeholder="Type a number"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                className="form-control mt-2"
                type="email"
                placeholder="jsantamv@live.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <hr/>

            {
                (username === 'john') && <Message/>
            }


        </>
    );
}
