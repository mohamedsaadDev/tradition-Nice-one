import React from 'react'
import { Autoplay,Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./BanerSlide.css"
import { useTranslation } from 'react-i18next';
const BanerSlide = ({banerSlide}) => {
    const {i18n } = useTranslation();
    return (
            <Swiper
            className="mySwiper swiper-h baner-slide"
            pagination={{
            clickable: true,
            }}
            
            modules={[ Autoplay,Pagination]}
            loop={true}
            autoplay={{
                delay: 4000,
                reverseDirection: i18n.language ==="en"?false:true,
            }}>
            {banerSlide.map((onebanerSlide,index)=>
            <SwiperSlide className='swiper-slide-baner' key={index}><img loading='lazy' className='oneimg-baner-slide' src={onebanerSlide} alt="" /></SwiperSlide>
            )}
        </Swiper>
    )
}

export default BanerSlide