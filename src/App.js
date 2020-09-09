import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Navbar/Menu';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <div>
        <Menu/>
        <Routes/>
      </div>
    </Router>
  );
}

export default App;
