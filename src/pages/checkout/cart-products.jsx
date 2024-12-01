import React from 'react'
import styles from "./checkout.module.scss"
import crossIcon from "../../assets/imgs/crossIcon.svg"
import pro1 from "../../assets/imgs/pro1.png"
import { ProductQuantityCounter } from '../../components/shopping_cart/product-quantity-counter'


export const CartProduct = () => {
    return (

        <tr className={`${styles.table_row}`}>
            <td>
                <div className={`${styles.product_cell}`}>
                    <div className={`${styles.image_container}`}>
                        <img className={`${styles.product_img}`} src={pro1} alt="" />
                        <img className={`${styles.cross_icon}`} src={crossIcon} alt="crossIcon" />
                    </div>
                    <p className='m-0 ps-2'>LCD monitor</p>
                </div>
            </td>
            <td>$650</td>
            <td><ProductQuantityCounter small></ProductQuantityCounter></td>
            <td>$650</td>
        </tr>


    )
}
