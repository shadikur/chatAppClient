import React, { useContext } from 'react';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { AppContext } from './Context/AuthContext';



const App = () => {
  const { user } = useContext(AppContext);
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