import React from 'react';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';



const App = () => {
  return (
    <div className='text-secondary'>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default App;