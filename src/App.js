import React from 'react';
import Header from './components/Header';
import Links from './components/Links';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Header/>
      <Links/>
    </Container>
  );
}

export default App;
