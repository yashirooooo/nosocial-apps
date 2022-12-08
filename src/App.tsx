import React from 'react';
import logo from './logo160.png';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Not Only Social
        </p>
        <div>
          <Button variant="contained">Connect Wallet</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
