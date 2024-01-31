import React, { useEffect } from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import CarouselLeftNavigation from './CarouselLeftNavigation';
import { Navigation , Controller} from 'swiper/modules';
import CarouselRightNavigation from './CarouselRightNavigation';
import style from './Carousel.module.css';
import 'swiper/css';


const Controls = ({data}) => {
    const swiper = useSwiper();
    useEffect(()=> {
        swiper.slideTo(0, null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data]);
    return <></>
}

const Carousel = ({data, renderComponent}) => {
  return (
    <div className={style.wrapper}>
    <Swiper 
    spaceBetween={40}
    style={{padding: "0px 20px", width: "100%", display: "flex"}}
    navigation={true} 
    modules={[Navigation, Controller]}    
    initialSlide={0}
    allowTouchMove
    slidesPerView="auto"
    >
        <Controls data={data} />
        <CarouselLeftNavigation/>
        <CarouselRightNavigation/>
        <div className={style.card_wrapper}>
        {
            data.map((card) => {
               return (<SwiperSlide>{renderComponent(card)}</SwiperSlide>)
            })
        }
        </div>
    </Swiper>
    </div>
  )
}

export default Carousel