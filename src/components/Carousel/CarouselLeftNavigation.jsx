import React, { useEffect, useState } from 'react'
import { ReactComponent as LeftArrow } from '../../assets/swip_left.svg'
import { useSwiper } from 'swiper/react';

const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBegining, setIsBegining] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on('slideChange', () => {
            setIsBegining(swiper.isBeginning);
        })
    },[])

  return (
    <div>
        {!isBegining && <LeftArrow onClick={() => {swiper.slidePrev()}} />}
    </div>
  )
}

export default CarouselLeftNavigation