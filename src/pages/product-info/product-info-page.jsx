import React, { useEffect, useState } from 'react'
import styles from './product-info-page.module.scss'
import { Page_layout } from '../../components/layouts/page-layout'
import { SectionHeading } from '../../components/section-headings/section-heading'
import BestProductSlider from '../../components/slider/best-product-slider'
import { singleProduct } from '../../services/single-data';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Rating } from 'react-simple-star-rating'
import { ProductColorVarients } from './product_color_varients'
import { PrimaryButton } from "../../components/buttons/primary-button"
import { ProductQuantityCounter } from '../../components/shopping_cart/product-quantity-counter'
import delivery_icon from "../../assets/imgs/icon-delivery.svg"
import return_icon from "../../assets/imgs/icon-return.svg"
import { ProductShippingCard } from './product-shipping-card'
import { ProductImagesSlider } from '../../components/slider/product-images-slider'
import useShoppingCart from '../../hooks/use-shopping-cart'
import { useSelector } from 'react-redux'
import { Helpers } from '../../services/helpers'



export const ProductInfoPage = () => {


    const [activeColor, setActiveColor] = useState(singleProduct.colors?.[0] ?? null);
    const [quantity, setQuantity] = useState(0)
    const { addToCart, decreaseProductQuantityInCart, removeFromCart, getCartCount, getCartProducts, getCartProductsQuantity, getCartSingleProduct, clearCart } = useShoppingCart();
    const product = useSelector(state=> state.cart.product)
    console.log(product);
    

    useEffect(() => {
        const q = getCartProductsQuantity(singleProduct.id);
        setQuantity(q);
    }, [getCartProductsQuantity, addToCart, decreaseProductQuantityInCart]);
    console.log(quantity)

    return (

        <Page_layout>


            <section className={`container my-5 py-5`}>
                <div className="row">
                    <div className="col-lg-7">
                        <div className={`${styles.product_imagees_container}`}>
                            <figure>
                                <img src={singleProduct.images[0]} alt="products Feature Imgs" />
                            </figure>

                            <div className={styles.product_images_slider_container}>
                                <ProductImagesSlider images={singleProduct.images}></ProductImagesSlider>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 mt-lg-0 mt-5">
                        <div className={styles.product_content_container}>
                            <h1 className={styles.product_title}>{singleProduct.name}</h1>
                            <div className='d-flex gap-2 align-items-center'>
                                <div><Rating initialValue={singleProduct.rating} readonly={true} allowFraction={true} size={20} /></div>
                                <span className={styles.in_stock}>In Stock</span>
                            </div>

                            <p className={styles.product_price}>{Helpers.priceFormatter(singleProduct.price)}</p>
                            <p className={styles.product_desc}>{singleProduct.description}</p>

                            <div className={`${styles.product_color_variants} d-flex gap-2 align-items-center`}>
                                <span className={styles.product_color_title}>Colors:</span>
                                <div className='d-flex gap-2 align-items-center'>
                                    {activeColor && <ProductColorVarients colorList={singleProduct.colors} activeColor={activeColor} onChangeColor={setActiveColor}></ProductColorVarients>}
                                </div>
                            </div>

                            <div className={`${styles.product_buy_container}  d-flex gap-2 align-items-center my-5`}>
                                <div>
                                    {quantity > 0 ?
                                        <ProductQuantityCounter qty={quantity} onIncreament={() => addToCart(singleProduct)} onDecreament={() => decreaseProductQuantityInCart(singleProduct)}></ProductQuantityCounter> :
                                        <PrimaryButton onClick={() => addToCart(singleProduct)
                                        }>Add to Cart</PrimaryButton>
                                    }
                                </div>
                                <div>
                                    <PrimaryButton onClick={() => null}>Buy Now</PrimaryButton>
                                </div>

                            </div>

                            <div className={`${styles.product_shipping_container}  d-flex flex-column my-5`}>
                                <ProductShippingCard icon={delivery_icon} title="Free Delivery" desc="Enter your postal code for Delivery Availability"></ProductShippingCard>
                                <ProductShippingCard icon={return_icon} title="Return Delivery" desc="Free 30 Days Delivery Returns."></ProductShippingCard>
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
