import React from 'react';
import './App.css';
import Hero from './compoments/Hero/Hero';
import Header from './compoments/Hero/Header/Header';
import Program from './compoments/Hero/Programs/Program';
import Reasons from './compoments/Hero/Reasons/Reasons';

function App() {
  return (
    <div className="App">
     <Hero />
     <Program />
     <Reasons />
    
    </div>
  );
}

export default App;
