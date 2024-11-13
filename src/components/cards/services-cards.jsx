import React from 'react'
import styles from "./cards.module.scss";
import ic1 from "../../assets/imgs/ic1.png"

export const ServicesCard = (props) => {
    return (
        <div className={`${styles.servicesCardContainer} text-center`}>
            <img src={props.icon} alt="" className='my-3' />
            <h6>{props.title}</h6>
            <p>{props.text}</p>
        </div>
    )
}
