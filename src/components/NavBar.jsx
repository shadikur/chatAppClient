import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="dark" className='mb-4' style={{ height: "3.7rem" }}>
            <h2 className='container'>
                <Link to={"/"}>
                    ChatApp
                </Link>
            </h2>
        </Navbar>
    );
};

export default NavBar;