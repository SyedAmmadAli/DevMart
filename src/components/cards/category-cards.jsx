import React from 'react'
import styles from "./cards.module.scss";
import icon from "../../assets/imgs/c1.png";

export const CategoryCard = (props) => {
    
  return (
    <div className={styles.CategoryCard_container} >
        <img src={props.icon} alt="" />
        <p>{props.title}</p>
    </div>
  )
}
