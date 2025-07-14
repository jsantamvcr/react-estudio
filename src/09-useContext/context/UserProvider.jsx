import React, { useState } from 'react';
import { UserContext } from './UserContext.jsx';

export const UserProvider = ({ children }) => {

    // const user = {
    //     id: 123,
    //     name: 'John Doe',
    //     email: 'jsantamv@live.com',
    // }

const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>

    );
};

