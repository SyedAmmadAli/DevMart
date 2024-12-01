import React from 'react'
import styles from "./checkout.module.scss"
import { PrimaryButton } from '../../components/buttons/primary-button'

export const CheckoutSummary = () => {
  return (
    <div className={`${styles.checkout_summary}`}>
        <div className='d-flex justify-content-between border-bottom border-3 py-3'>
            <div>Subtotal</div>
            <div>$1750</div>
        </div>
        <div className='d-flex justify-content-between border-bottom border-3 py-3'>
            <div>Pay by</div>
            <div>Card</div>
        </div>
        <div className='d-flex justify-content-between py-3'>
            <div>Total</div>
            <div>$1750</div>
        </div>
        
        <div className='mt-5'>
            <PrimaryButton>Proceed to Checkout</PrimaryButton>
        </div>
    </div>
  )
}
