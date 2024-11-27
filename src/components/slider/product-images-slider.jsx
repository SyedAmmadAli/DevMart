import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
import 'swiper/scss';
import 'swiper/scss/pagination';
import styles from "./sliders.module.scss"
import { singleProduct } from '../../services/single-data';

export const ProductImagesSlider = (images) => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={160}

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
                    singleProduct.images.map((src, key) => (
                        <SwiperSlide key={key} className='d-flex justify-content-center'>
                            <img className={styles.product_other_images} src={src} alt="other pics of product" />
                        </SwiperSlide>
                    ))
                }
            </Swiper></>
    )
}
