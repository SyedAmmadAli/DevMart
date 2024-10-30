import React from 'react'
import styles from './buttons.module.scss'

export const PrimaryButton = (props) => {
  return (
    <button className={styles.button_container} onClick={props.onClick} disabled={props.disabled}>
        {props.loading ? "loading..." : props.children}
    </button>
  )
}
