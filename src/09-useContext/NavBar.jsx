import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        // <>
        //     <Link to="/">Home</Link>
        //     <Link to="/about">about</Link>
        //     <Link to="/login">login</Link>
        // </>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Use Context</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

