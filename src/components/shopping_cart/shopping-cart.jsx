import React from 'react'
import styles from "./shoppingCart.module.scss";
import { IoCartOutline } from "react-icons/io5";

export const ShoppingCart = () => {
    return (
        <div className={`${styles.shoppingCart_Icon} me-4`}>
            <IoCartOutline style={{ fontSize: '30px' }} />
        </div>
    )
}
