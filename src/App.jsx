import React, { useContext } from 'react';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { AppContext } from './Context/AuthContext';
import ChatContext from './Context/ChatContext';



const App = () => {
  const { user } = useContext(AppContext);
  return (
    <div className='text-secondary'>
      <ChatContext user={user}>
        <NavBar />
        <Container>
          <Outlet />
        </Container>
      </ChatContext>
    </div>
  );
};

export default App;