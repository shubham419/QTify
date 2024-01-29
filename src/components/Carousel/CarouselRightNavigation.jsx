import React, { useEffect, useState } from 'react'
import { ReactComponent as RightArrow } from '../../assets/swip_right.svg'
import { useSwiper } from 'swiper/react';

const CarouselRightNavigation = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on('slideChange', () => {
            setIsEnd(swiper.isEnd);
        })
    },[])

  return (
    <div>
        {!isEnd && <RightArrow onClick={() => {swiper.slideNext()}} />}
    </div>
  )
}

export default CarouselRightNavigation