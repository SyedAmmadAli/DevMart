import React from 'react'
import { Page_layout } from '../../components/layouts/page-layout'
import styles from "./checkout.module.scss"
import { CartProduct } from './cart-products'
import { CheckoutSummary } from './checkout-summary'

export const Checkout = () => {
    return (
        <Page_layout>
            <div className={`container my-5 py-5`}>
                <table className={`table table-responsive table-borderless align-middle ${styles.table_container}`}>
                    <thead>
                        <tr className={`${styles.table_row}`}>
                            <td scope="col">Product</td>
                            <td scope="col">Price</td>
                            <td scope="col">Quantity</td>
                            <td scope="col">Subtotal</td>
                        </tr>
                    </thead>
                    <tbody>
                        <CartProduct></CartProduct>
                        <CartProduct></CartProduct>
                    </tbody>
                </table>

                <div className='mt-5 d-flex justify-content-end'>
                    <CheckoutSummary></CheckoutSummary>
                </div>
            </div>
        </Page_layout>
    )
}
