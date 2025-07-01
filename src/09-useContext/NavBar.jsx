import React from 'react';
import { NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (// <>
        //     <Link to="/">Home</Link>
        //     <Link to="/about">about</Link>
        //     <Link to="/login">login</Link>
        // </>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Use Context</a>
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
                            About
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>);
};

