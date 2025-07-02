import React, { useContext } from 'react';
import { UserContext } from './context/UserContext.jsx';

export const HomePage = () => {

    const { user } = useContext(UserContext);

    return (
        <>
         <h1>Home  Page</h1>


            <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
    );
};

