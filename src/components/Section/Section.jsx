import React, {useState, useEffect} from 'react'
import { fetchTopAlbum } from '../../api/api';
import style from './Section.module.css';
import Card from '../Card/Card';

const Sectiom = () => {

    const[topAlbum, setTopAlbum] = useState([]);

    const getTopAlbum = async () => {
      const topAlbum = await fetchTopAlbum();
      setTopAlbum(topAlbum);
    }
  
    useEffect(()=> {
      getTopAlbum();
    },[]);

  return (
    <div>
        <div className={style.header}>
          <p>Top Albums</p>
          {/* <button>Show all</button> */}
          <button>Collapse</button>
        </div>
        <div className={style.cards}>
        {topAlbum.map((album) => {
        return <Card data={album} type="album" key={album.id}/>
      })}
        </div>
    </div>
  )
}

export default Sectiom