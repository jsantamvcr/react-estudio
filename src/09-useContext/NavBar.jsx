import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (// <>
        //     <Link to="/">Home</Link>
        //     <Link to="/about">about</Link>
        //     <Link to="/login">login</Link>
        // </>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Use Context</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink
                            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                            to="/">
                            home
                        </NavLink>
                        <NavLink
                            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                            to="/about">
                            About
                        </NavLink>
                        <NavLink
                            className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                            to="/login">
                            Login
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>);
};

