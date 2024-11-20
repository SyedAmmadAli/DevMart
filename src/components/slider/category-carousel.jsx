import React, { useRef, useState } from 'react';
import styles from "./sliders.module.scss"
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import c1 from "../../assets/imgs/c1.png";
import c2 from "../../assets/imgs/c2.png";
import c3 from "../../assets/imgs/c3.png";
import c4 from "../../assets/imgs/c4.png";
import c5 from "../../assets/imgs/c5.png";
import c6 from "../../assets/imgs/c6.png";

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { CategoryCard } from '../cards/category-cards';



export default function CategoryCarousel() {

  const swiperRef = useRef(null);

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

  const Categories = [

    { icon: c1, title: 'Phone' },
    { icon: c2, title: 'Computer' },
    { icon: c3, title: 'SmartWatch' },
    { icon: c4, title: 'Camera' },
    { icon: c5, title: 'HeadPhones' },
    { icon: c6, title: 'Gaming' },
    { icon: c1, title: 'Phone' },
    { icon: c2, title: 'Computer' },
    { icon: c3, title: 'SmartWatch' },
    { icon: c4, title: 'Camera' },
    { icon: c5, title: 'HeadPhones' },
    { icon: c6, title: 'Gaming' }

  ]
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
          0: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          992: { slidesPerView: 5, spaceBetween: 30 },
          1200: { slidesPerView: 6, spaceBetween: 30 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          Categories.map((item, key) => (
            <SwiperSlide key={key} className='d-flex justify-content-center'> <CategoryCard icon={item.icon} title={item.title} /> </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
