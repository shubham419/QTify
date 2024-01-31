import React, { useEffect, useState } from 'react'
import { ReactComponent as RightArrow } from '../../assets/swip_right.svg'
import { useSwiper } from 'swiper/react';
import styles from './Carousel.module.css';

const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);
    useEffect(() => {
        swiper.on('slideChange', () => {
            setIsEnd(swiper.isEnd);
        })
    },[isEnd])

  return (
    <div className={styles.right_nav}>
        {!isEnd ?<RightArrow onClick={() => {swiper.slideNext()}} /> : null} 
    </div>
  )
}

export default CarouselRightNavigation