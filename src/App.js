import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import { fetchTopAlbum } from './api/api';


function App() {

  const[topAlbum, setTopAlbum] = useState([]);


  const getTopAlbum = async () => {
    const topAlbum = await fetchTopAlbum();
    setTopAlbum(topAlbum);
  }

  useEffect(()=> {
    getTopAlbum();
  },[]);

  return (
    <div className="App">
      <Navbar />
      <Hero />
     <Section data={topAlbum} title="Top Album" type="album"/>
    </div>
  );
}


export default App;
