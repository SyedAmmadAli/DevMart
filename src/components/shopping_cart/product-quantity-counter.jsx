import React from 'react'
import styles from "./shoppingCart.module.scss"
import { IoAddOutline } from "react-icons/io5";
import { AiOutlineMinus } from "react-icons/ai";

export const ProductQuantityCounter = ({ qty, onIncreament, onDecreament, small }) => {
    return (
        <div className={`${styles.product_quantity_counter} ${small && styles.product_quantity_counter_small} d-flex justify-content-between align-items-center`}>
            <span className={styles.update_counter_button} onClick={onDecreament}><AiOutlineMinus size={small ? 17 : 27} /></span>
            <span className={styles.counter_value}>{qty}</span>
            <span className={styles.update_counter_button} onClick={onIncreament}><IoAddOutline size={small ? 17 : 27} /></span>
        </div>
    )
}
