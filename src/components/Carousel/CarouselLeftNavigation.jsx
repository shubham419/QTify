import React, { useEffect, useState } from 'react'
import { ReactComponent as LeftArrow } from '../../assets/swip_left.svg'
import { useSwiper } from 'swiper/react';
import styles from './Carousel.module.css';


const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBegining, setIsBegining] = useState(swiper.isBeginning);
    console.log("is Begining ==>",isBegining);

    useEffect(() => {
      console.log("inside left navigation")
        swiper.on('slideChange', () => {
            setIsBegining(swiper.isBeginning);
        })
    },[isBegining])

  return (
    <div className={styles.left_nav}>
        {!isBegining ? <LeftArrow onClick={() => {swiper.slidePrev()}} /> : null}
    </div>
  )
}

export default CarouselLeftNavigation