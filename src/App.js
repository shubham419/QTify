import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import { fetchNewAlbum, fetchSongs, fetchTopAlbum } from "./api/api";
import styles from "./App.module.css";

function App() {
  const [topAlbum, setTopAlbum] = useState([]);
  const [newAlbum, setNewAlbum] = useState([]);
  const [songs, setSongs] = useState([]);
  const [filteredSongsData, setFilteredSongsData] = useState([]);


  const getTopAlbum = async () => {
    const topAlbum = await fetchTopAlbum();
    setTopAlbum(topAlbum);
  };

  const getNewAlbum = async () => {
    const newAlbum = await fetchNewAlbum();
    setNewAlbum(newAlbum);
  };

  const getSongs = async () => {
    const data = await fetchSongs();
    setSongs(data);
  }


  const filterSongs = (val) => {
      console.log(val);
      let key;
      if(val === 0){
        setFilteredSongsData(songs);
        return;
      }
      switch (val){
        case 1 :{
          key = "rock";
          break;
        }
        case 2 :{
          key = "pop";
          break;
        }
        case 3 :{
          key = "jazz"
          break;

        }
        case 4 :{
          key = "blues"
          break;

        }
        default: {
          key = "rock"
          break;
        }
      }
      const res = songs.filter((item) => item.genre.key === key);
      setFilteredSongsData(res);

  }

  useEffect(() => {
    getTopAlbum();
    getNewAlbum();
    getSongs();
  }, []);

  useEffect(() =>{
    filterSongs(0);
  } ,[songs])

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className={styles.section_wrapper}>
        <Section data={topAlbum} title="Top Album" type="album" />
        <Section data={newAlbum} title="New Album" type="album" />
        <Section data={filteredSongsData} title="Songs" type="song" handleFilter={filterSongs} />
      </div>
    </div>
  );
}

export default App;
