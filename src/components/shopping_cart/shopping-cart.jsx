import React from 'react'
import styles from "./shoppingCart.module.scss";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const ShoppingCart = () => {

    const isLogin = useSelector(state=> state.user.isLogin);
    const navigate = useNavigate();

    return (
        <div className={`${styles.shoppingCart_Icon} me-4`}>
            <IoCartOutline onClick={()=> isLogin ? navigate('/checkout'): navigate('/auth/login') } style={{ fontSize: '30px' }} />
        </div>
    )
}
