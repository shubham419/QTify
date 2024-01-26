import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import SongCard from './components/SongCard/SongCard';
import { fetchTopAlbum } from './api/api';
import { Card } from './components/Card/Card';



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
      {topAlbum.map((album) => {
        return <Card data={album} type="album" key={album.id}/>
      })}
    </div>
  );
}


export default App;
