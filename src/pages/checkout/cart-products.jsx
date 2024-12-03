import React from 'react'
import styles from "./checkout.module.scss"
import crossIcon from "../../assets/imgs/crossIcon.svg"
import pro1 from "../../assets/imgs/pro1.png"
import { ProductQuantityCounter } from '../../components/shopping_cart/product-quantity-counter'
import useShoppingCart from '../../hooks/use-shopping-cart'
import { Helpers } from '../../services/helpers'


export const CartProduct = ({data}) => {

    const total_price = data.product.price * data.quantity;
    const { addToCart, decreaseProductQuantityInCart, removeFromCart, getCartCount, getCartProducts, getCartProductsQuantity, getCartSingleProduct, clearCart } = useShoppingCart();

    
    return (

        <tr className={`${styles.table_row}`}>
            <td>
                <div className={`${styles.product_cell}`}>
                    <div className={`${styles.image_container}`}>
                        <img className={`${styles.product_img}`} src={data?.product?.images?.[0]} alt="" />
                        <img className={`${styles.cross_icon}`} src={crossIcon} alt="crossIcon" onClick={()=> removeFromCart(data.product)} />
                    </div>
                    <p className='m-0 ps-2'>{data?.product.name}</p>
                </div>
            </td>
            <td>{Helpers.priceFormatter(data?.product?.price)}</td>
            <td><ProductQuantityCounter small qty={data.quantity} onIncreament={()=> addToCart(data.product)}  onDecreament={()=> decreaseProductQuantityInCart(data?.product)}></ProductQuantityCounter></td>
            <td>{Helpers.priceFormatter(total_price)}</td>
            
        </tr>


    )
}
