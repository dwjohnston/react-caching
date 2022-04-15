import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from './routing/Router';
import { Timer } from './components/Timer';

function App() {
  return (
    <div className="App">
      <Timer />
      <Router />

    </div>
  );
}

export default App;
