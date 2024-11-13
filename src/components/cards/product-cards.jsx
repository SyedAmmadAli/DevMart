import React from 'react'
import p1 from '../../assets/imgs/p1.png'
import { Rating } from 'react-simple-star-rating'
import { IoCartOutline } from "react-icons/io5";
import styles from "./cards.module.scss";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const ProductCards = ({data}) => {

    const isLogin = useSelector(state => state.user.isLogin);
    const navigate = useNavigate();

    return (
        <div className={styles.product_card_container}>
            <div className={styles.card_img_container}>
                <img src={data?.images ? data.images[0] : p1} alt="" />
            </div>
            <div className={styles.card_content}>
                <div className="card_detail">
                    <h6>{data?.name}</h6>
                    <p>{data?.price}</p>
                    <Rating initialValue={data?.rating} readonly={true} allowFraction={true} size={20} />

                </div>
                <div className={`${styles.cartIcon}`}>
                    <IoCartOutline style={{ fontSize: '28px' }} onClick={()=> isLogin ? alert("Add to Cart") : navigate("/auth/login") }/>
                </div>
            </div>
        </div>
    )
}
