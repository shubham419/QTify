import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import SongCard from './components/SongCard/SongCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SongCard likes={10} title={"test"} imgUrl="https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"/>
    </div>
  );
}


export default App;
