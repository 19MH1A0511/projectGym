import React from 'react';
import './App.css';
import Hero from './compoments/Hero/Hero';
import Header from './compoments/Hero/Header/Header';
import Program from './compoments/Hero/Programs/Program';
import Reasons from './compoments/Hero/Reasons/Reasons';
import Plans from './compoments/Hero/Plans/Plans';
import Testimonials from './compoments/Hero/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
     <Hero />
     <Program />
     <Reasons />
     <Plans />
    <Testimonials />
    </div>
  );
}

export default App;
