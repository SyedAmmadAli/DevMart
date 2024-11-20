import React, { useState } from 'react'
import styles from './product-info-page.module.scss'
import { Page_layout } from '../../components/layouts/page-layout'
import { SectionHeading } from '../../components/section-headings/section-heading'
import BestProductSlider from '../../components/slider/best-product-slider'
import { singleProduct } from '../../services/single-data';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
import { Rating } from 'react-simple-star-rating'
import { ProductColorVarients } from './product_color_varients'
import { PrimaryButton } from "../../components/buttons/primary-button"
import { ProductQuantityCounter } from '../../components/shopping_cart/product-quantity-counter'

export const ProductInfoPage = () => {

    const [activeColor, setActiveColor] = useState(singleProduct.colors?.[0] ?? null);

    console.log(singleProduct.images);
    return (



        <Page_layout>


            <section className={`container my-5 py-5`}>
                <div className="row">
                    <div className="col-7">
                        <div className={`${styles.product_imagees_container}`}>
                            <figure>
                                <img src={singleProduct.images[0]} alt="products Feature Imgs" />
                            </figure>

                            <div className={styles.product_images_slider_container}>
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
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className={styles.product_content_container}>
                            <h1 className={styles.product_title}>{singleProduct.name}</h1>
                            <div className='d-flex gap-2 align-items-center'>
                                <div><Rating initialValue={singleProduct.rating} readonly={true} allowFraction={true} size={20} /></div>
                                <span className={styles.in_stock}>In Stock</span>
                            </div>

                            <p className={styles.product_price}>{singleProduct.price}</p>
                            <p className={styles.product_desc}>{singleProduct.description}</p>

                            <div className={`${styles.product_color_variants} d-flex gap-2 align-items-center`}>
                                <span className={styles.product_color_title}>Colors:</span>
                                <div className='d-flex gap-2 align-items-center'>
                                    {activeColor && <ProductColorVarients colorList={singleProduct.colors} activeColor={activeColor} onChangeColor={setActiveColor}></ProductColorVarients>}
                                </div>
                            </div>

                            <div className={`${styles.product_buy_container}  d-flex gap-2 align-items-center my-5`}>
                                <div><ProductQuantityCounter></ProductQuantityCounter> </div>
                                <div><PrimaryButton onClick={() => null}>Buy Now</PrimaryButton></div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>


            {/* best selling slider */}
            <section className={`${styles.categorySection} container my-5 py-5`}>
                <SectionHeading >Related Items</SectionHeading>
                <BestProductSlider></BestProductSlider>
            </section>
        </Page_layout>
    )
}
