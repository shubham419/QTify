import React from 'react';
import style from './Hero.module.css';
import hero from '../../assets/hero.png'; 

const Hero = () => {
  return (
    <div className={style.hero_div}>
        <div>
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
        </div>
        <div>
            <img src={hero} alt="headphone" width={212} />
        </div>
    </div>
  )
}

export default Hero