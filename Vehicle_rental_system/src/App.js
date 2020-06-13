import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes/Routes';
import Header from './components/Header/Header'

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
