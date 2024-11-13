import React from 'react'
import styles from './home.module.scss'
import { Page_layout } from '../../components/layouts/page-layout'
import BannerSlider from '../../components/slider/banner-slider'
import featureImg from '../../assets/imgs/featureImg.png'
import dummydata from "../../services/dummy-data.json"
// Banner Images
import banner1 from '../../assets/imgs/Banner1.png'
import banner2 from '../../assets/imgs/Banner2.jpg'
import banner3 from '../../assets/imgs/Banner3.webp'
import { SectionHeading } from '../../components/section-headings/section-heading'
import CategoryCarousel from '../../components/slider/category-carousel'
import { ProductCards } from '../../components/cards/product-cards'
import BestProductSlider from '../../components/slider/best-product-slider'
import { PrimaryButton } from '../../components/buttons/primary-button'
import { useNavigate } from 'react-router-dom'
import { ServicesCard } from '../../components/cards/services-cards'

import ic1 from '../../assets/imgs/ic1.png'
import ic2 from '../../assets/imgs/ic2.png'
import ic3 from '../../assets/imgs/ic3.png'



export const Home = () => {

  const navigate = useNavigate();
  const bannerImages = [banner1, banner2, banner3]

  const Services = [
    {
      icon: ic1,
      title: "FREE AND FAST DELIVERY",
      text: "Free delivery for all orders over $140"
    },
    {
      icon: ic2,
      title: "FREE AND FAST DELIVERY",
      text: "Free delivery for all orders over $140"
    },
    {
      icon: ic3,
      title: "FREE AND FAST DELIVERY",
      text: "Free delivery for all orders over $140"
    }
  ]

  return (
    <>
      <Page_layout>
        {/* banner carousel */}
        <BannerSlider images={bannerImages}></BannerSlider>

        {/* category slider */}
        <div className={`${styles.categorySection} container my-5 py-5`}>
          <SectionHeading title="Browse By Category">Categories</SectionHeading>
          <CategoryCarousel></CategoryCarousel>
        </div>

        {/* best selling slider */}
        <div className={`${styles.categorySection} container my-5 py-5`}>
          <SectionHeading title="Best Selling Products">This Month</SectionHeading>
          <BestProductSlider></BestProductSlider>
        </div>

        <div className={`${styles.categorySection} container my-5 py-5`}>
          <SectionHeading title="Explore Our Products">Our Products</SectionHeading>
          <div className='d-flex flex-wrap justify-content-md-between justify-content-center mt-4'>
            {
              dummydata?.products.slice(0, 8).map((item, key) => (
                <div key={key} className='mt-5'>
                  <ProductCards data={item} />
                </div>
              ))
            }
          </div>
          <div className='mt-5' style={{ width: '200px', margin: 'auto' }}>
            <PrimaryButton loading={false} disabled={false} onClick={() => navigate("/products")} >View All Products</PrimaryButton>
          </div>
        </div>

        {/* featureImg */}

        <div className="container my-5">
          <img src={featureImg} width={'100%'} alt="" />
        </div>


        {/* services Card */}

        <div className={`${styles.servicesSection} container d-flex flex-wrap justify-content-md-around justify-content-center`}>
          {
            Services.map((item,key)=> (
  
              <div key={key} className='mt-3'>
              <ServicesCard icon={item.icon} title={item.title} text={item.text}></ServicesCard>
              </div>
            ))
          }
        </div>


      </Page_layout>
    </>
  )
}
