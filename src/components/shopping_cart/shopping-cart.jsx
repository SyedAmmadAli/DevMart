import React from 'react'
import styles from "./shoppingCart.module.scss";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useShoppingCart from '../../hooks/use-shopping-cart';

export const ShoppingCart = () => {

    const isLogin = useSelector(state=> state.user.isLogin);
    const navigate = useNavigate();
    const { addToCart, decreaseProductQuantityInCart, removeFromCart, getCartCount} = useShoppingCart()
    const counter = getCartCount()

    return (
        <div className={`${styles.shoppingCart_Icon} me-4`}>
            {counter > 0 && <span className={styles.cart_products_quantity}>{counter}</span>}
            <IoCartOutline onClick={()=> isLogin ? navigate('/checkout'): navigate('/auth/login') } style={{ fontSize: '30px' }} />
        </div>
    )
}
