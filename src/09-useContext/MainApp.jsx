import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { About, HomePage, LoginPage, NavBar } from './';


export const MainApp = () => {
    return (
        <>
            <h1>APP</h1>
            <NavBar/>
            <hr/>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="login" element={<LoginPage/>}/>

                {/* Redirects no found*/}
                {/*<Route path="/*" element={<LoginPage/>}/>*/}
                {/*another way to redirect*/}
                <Route path="/*" element={<Navigate to="/about"/>}/>

            </Routes>
        </>
    );
};
