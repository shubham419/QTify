import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
     <Section/>
    </div>
  );
}


export default App;
