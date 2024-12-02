import React from 'react'
import { HashLoader } from 'react-spinners'
import styles from "./loader.module.scss"

const Loader = () => {
  return (
    <div className={styles.container}>
        <HashLoader size={100} color='#DB4444' speedMultiplier={1.5} />        
    </div>
  )
}

export default Loader