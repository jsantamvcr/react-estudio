import React, { useContext } from 'react';
import { UserContext } from './context/UserContext.jsx';

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext);


    return (
        <>
            <h1>Login Page <small>{user?.name}</small></h1>

            <pre>{JSON.stringify(user, null, 2)}</pre>

            <button className="btn btn-primary"
                    onClick={() => setUser({
                        id: 123,
                        name: 'John Doe',
                        email: 'jsanta@asdfsd.com',
                    })}
            >Set User
            </button>

        </>

    );
};

