import React, { useContext } from 'react';
import { Nav, Navbar, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppContext } from '../Context/AuthContext';

const NavBar = () => {
    const { user, logOut } = useContext(AppContext);

    return (
        <Navbar bg="dark" className='mb-4' style={{ height: "3.7rem" }}>
            <div className='container'>
                <h2 >
                    <Link to={"/chat"} className='text-light text-decoration-none'>
                        ChatApp
                    </Link>
                </h2>
                {user && <span className='text-warning'>Logged in as {user?.name}</span>}
                <Nav>
                    <Stack direction='horizontal' gap="3">
                        {
                            user ?
                                <Link onClick={() => logOut()} className='text-light text-decoration-none'>
                                    Logout
                                </Link> : <>
                                    <Link to={"/login"} className='text-light text-decoration-none'>
                                        Login
                                    </Link>
                                    <Link to={"/register"} className='text-light text-decoration-none'>
                                        Register
                                    </Link>
                                </>

                        }


                    </Stack>
                </Nav>
            </div>
        </Navbar>
    );
};

export default NavBar;