import React from 'react';
import './css/App.css';
import Hero from './Pages/hero';
import NavBar from './Pages/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
    </div>
  )
}

export default App