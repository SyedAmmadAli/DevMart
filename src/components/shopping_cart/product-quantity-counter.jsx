import React from 'react'
import styles from "./shoppingCart.module.scss"
import { IoAddOutline } from "react-icons/io5";
import { AiOutlineMinus } from "react-icons/ai";

export const ProductQuantityCounter = () => {
    return (
        <div className={`${styles.product_quantity_counter} d-flex justify-content-between align-items-center`}>
            <span className={styles.update_counter_button}><AiOutlineMinus size={27}/></span>
            <span></span>
            <span className={styles.update_counter_button}><IoAddOutline size={27}/></span>
        </div>
    )
}
