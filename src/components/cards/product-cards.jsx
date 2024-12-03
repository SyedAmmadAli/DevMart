import React from 'react'
import p1 from '../../assets/imgs/p1.png'
import { Rating } from 'react-simple-star-rating'
import { IoCartOutline } from "react-icons/io5";
import styles from "./cards.module.scss";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { singleProduct } from '../../services/single-data';
import useShoppingCart from '../../hooks/use-shopping-cart';
import { Helpers } from '../../services/helpers';

export const ProductCards = ({data}) => {

    const isLogin = useSelector(state => state.user.isLogin);
    const navigate = useNavigate();
    const {addToCart} = useShoppingCart();

    // function addProductintoCart(){
    //     if (!isLogin) {
    //         navigate("/auth/signup")
    //         return;
    //     };
    //     addToCart(data);
    // }

    return (
        <div className={styles.product_card_container} onClick={()=>navigate('/product-info')}>
            <div className={styles.card_img_container}>
                <img src={data?.images ? data.images[0] : p1} alt="" />
            </div>
            <div className={styles.card_content}>
                <div className={styles.card_details}>
                    <h6>{data?.name}</h6>
                    <p>Price: {Helpers.priceFormatter(data?.price)}</p>
                    <Rating initialValue={data?.rating} readonly={true} allowFraction={true} size={20} />

                </div>
                <div className={`${styles.cartIcon}`} onClick={(e)=>{
                     e.stopPropagation();
                     addToCart(data);
                }}>
                    <IoCartOutline style={{ fontSize: '28px' }} />
                </div>
            </div>
        </div>
    )
}
