import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./productSlide.css"
import { useTranslation } from 'react-i18next';
import Product from '../../components/Product/Product';
import { useSelector } from 'react-redux'
import { changelanguge } from '../../Func/changelanguge';
const ProdectSlide = () => {
    const {i18n,t} = useTranslation()
    const {products}=useSelector((state)=>state.products)
    const extractedproducts =changelanguge(products,i18n)
    return (
    <>
    <div className='wrapper-produectslide'>
    <h2>{t('EndofYearTopDeals')}</h2>
        <Swiper
            slidesPerView={6}
            spaceBetween={12}
            cssMode= {true}
            breakpoints={{
                260:{
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                450: {
                    slidesPerView: 3,
                    spaceBetween: 7,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 13,
                },
                992: {
                    slidesPerView: 5,
                    spaceBetween: 18,
                },
                1100: {
                    slidesPerView: 6,
                    spaceBetween: 18,
                },
        }}
            className="mySwiper swiper-produectslide"
            >
            {
                extractedproducts.map((item)=>
                <SwiperSlide key={item._id}>
                    <Product data={item} />
                </SwiperSlide>
            )}
        </Swiper>
        </div>
    </>
)
}
export default ProdectSlide