import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import { fetchNewAlbum, fetchTopAlbum } from "./api/api";
import styles from "./App.module.css";

function App() {
  const [topAlbum, setTopAlbum] = useState([]);
  const [newAlbum, setNewAlbum] = useState([]);

  const getTopAlbum = async () => {
    const topAlbum = await fetchTopAlbum();
    setTopAlbum(topAlbum);
  };

  const getNewAlbum = async () => {
    const newAlbum = await fetchNewAlbum();
    setNewAlbum(newAlbum);
  };

  useEffect(() => {
    getTopAlbum();
    getNewAlbum();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className={styles.section_wrapper}>
        <Section data={topAlbum} title="Top Album" type="album" />
        <Section data={newAlbum} title="New Album" type="album" />
      </div>
    </div>
  );
}

export default App;
