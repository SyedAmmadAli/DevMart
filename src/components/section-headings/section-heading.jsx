import React from 'react'
import square from '../../assets/imgs/Rectangle.png'
import styles from './section-heading.module.scss'

export const SectionHeading = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={square} alt="" />
                <p>{props.children}</p>
            </div>
            <h2 className={styles.title}>
                {props.title}
            </h2>
        </div>
    )
}
