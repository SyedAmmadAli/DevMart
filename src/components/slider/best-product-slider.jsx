import React, { useRef, useState } from 'react';
import styles from "./sliders.module.scss"
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import dummydata from "../../services/dummy-data.json"
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { CategoryCard } from '../cards/category-cards';
import { ProductCards } from '../cards/product-cards';



export default function BestProductSlider() {

  const swiperRef = useRef(null);

  console.log(dummydata?.products[0]);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };


  return (
    <>
      <div className={`d-flex gap-3 fs-5 justify-content-end me-5 mb-3 ${styles.swipper_button_container}`}>
        <div className={styles.nav_btn} onClick={goPrev}><FaArrowLeft /></div>
        <div className={styles.nav_btn} onClick={goNext}><FaArrowRight /></div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        ref={swiperRef}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          992: { slidesPerView: 3, spaceBetween: 30 },
          1200: { slidesPerView: 4, spaceBetween: 30 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          dummydata?.products.map((item, key) => (
            <SwiperSlide key={key} className='d-flex justify-content-center'> <ProductCards data={item} /> </SwiperSlide>
          ))
        }


      </Swiper>
    </>
  );
}
