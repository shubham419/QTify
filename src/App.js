import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import { fetchTopAlbum } from './api/api';


function App() {

  const[topAlbum, setTopAlbum] = useState([]);
  const[newAlbum, setNewAlbum] = useState([]);


  const getTopAlbum = async () => {
    const topAlbum = await fetchTopAlbum();
    setTopAlbum(topAlbum);
  }

  const getNewAlbum = async () => {
    const newAlbum = await fetchTopAlbum();
    setNewAlbum(newAlbum);
  }


  useEffect(()=> {
    getTopAlbum();
    getNewAlbum();
  },[]);

  return (
    <div className="App">
      <Navbar />
      <Hero />
     <Section data={topAlbum} title="Top Album" type="album"/>
     <Section data={newAlbum} title="New Album" type="album"/>

    </div>
  );
}


export default App;
